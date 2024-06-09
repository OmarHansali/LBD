/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Column,
  Table as ReactTable,
  ColumnFiltersState,
  FilterFn,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import Modal from "./Modal/Index";

// Column Filter
const Filter = ({
  column,
}: {
  column: Column<any, unknown>;
  table: ReactTable<any>;
}) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder="Search..."
        className="w-36 border shadow rounded"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
};

// Global Filter
const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

interface TableContainerProps {
  columns?: any;
  data?: any;
  tableclassName?: any;
  divclassName?: any;
  thclassName?: any;
  trclassName?: any;
  tableClass?: any;
  tdclassName?: any;
  theadclassName?: any;
  tbodyclassName?: any;
  isTfoot?: boolean;
  isSelect?: boolean;
  isBordered?: boolean;
  customPageSize?: number;
  isGlobalFilter?: boolean;
  isPagination: boolean;
  PaginationClassName?: string;
  SearchPlaceholder?: string;
  page: string
}

const TableContainer = ({
  columns,
  data,
  tableclassName,
  theadclassName,
  divclassName,
  trclassName,
  thclassName,
  tdclassName,
  tbodyclassName,
  isTfoot,
  isSelect,
  isPagination,
  customPageSize,
  isGlobalFilter,
  PaginationClassName,
  page

}: TableContainerProps) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank,
    });
    return itemRank.passed;
  };

  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const {
    getHeaderGroups,
    getFooterGroups,
    getRowModel,
    getPageOptions,
    setPageIndex,
    setPageSize,
    getState,
    getCanPreviousPage,
    getCanNextPage,
    nextPage,
    previousPage,
  } = table;

  useEffect(() => {
    Number(customPageSize) && setPageSize(Number(customPageSize));
  }, [customPageSize, setPageSize]);


  const navigate = useNavigate()
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [deleteApiKey, setDeleteApiKey] = useState<string>("")

  let createAction

  // actions

  switch (page) {
    case "user":
      createAction = "/admin/create-user"
      break;

    case "salle":
      createAction = "/admin/create-salle"
      break;

    case "reservation":
      createAction = "/admin/create-reservation"
      break;

  }

  const handleEdit = (row: any) => {

    switch (page) {
      case "user":
        navigate('/admin/edit-user', { state: { data: row } });
        break;

      case "salle":
        navigate('/admin/edit-salle', { state: { data: row } });
        break;

      case "reservation":
        navigate('/admin/edit-reservation', { state: { data: row } });
        break;

    }
  };

  const handleDeleteClick = (row: any) => {
    setIsModalOpen(true);
    switch (page) {
      case "user":
        console.log("Delete row in users:", row);
        break;

      case "salle":
        console.log("Delete row in salles:", row);
        break;

      case "reservation":
        console.log("Delete row in reservations:", row);
        break;

    }
  };

  const deletProcess = () => {
    // axios
    setIsModalOpen(true)
    console.log("start deleting");

  }



  return (
    <Fragment>
      {/* Modal */}

      {
        isModalOpen &&
        <Modal
          title={`Delete ${page}`}
          divClass="flex items-center justify-center min-h-screen px-4"
          content={`Are you sure that you to delete this ${page} ?`}
          onDiscard={() => {
            setIsModalOpen(false)
            // setDeleteApiKey("")
          }}
          onSubmit={deletProcess}
          sizeClass="relative w-full max-w-lg p-0 my-1 overflow-hidden bg-white border rounded-lg border-black/10 dark:bg-darklight dark:border-darkborder"
          spaceClass="py-4 px-5 space-y-4"
        />

      }

      {/* Modal */}
      <div className="flex items-center justify-between gap-3">
        {isSelect && (
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <p>Show</p>
            <select
              className="form-select !w-20"
              onClick={(event: any) => setPageSize(event.target.value)}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        )}

        <div className="flex gap-1 items-center">
          <div>
            {isGlobalFilter && (
              <DebouncedInput
                value={globalFilter ?? ""}
                onChange={(value) => setGlobalFilter(String(value))}
                className="form-input border px-3 rounded-md"
                placeholder="Search..."
              />
            )}
          </div>

          <Link
            to={createAction!}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2.5 shadow-sm rounded-md flex items-center gap-2"
          >
            <i className="icofont-plus text-white"></i>
            <span className="capitalize">Create New {page}</span>
          </Link>
        </div>
      </div>

      <div className={divclassName}>
        <table className={tableclassName}>
          <thead className={theadclassName}>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className={trclassName}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      {...{
                        className: `${header.column.getCanSort()} ${thclassName}`,
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        {header.isPlaceholder ? null : (
                          <React.Fragment>
                            <p>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </p>
                            <div className="flex flex-col">
                              {{
                                asc: <i className="ri-arrow-up-s-fill" />,
                                desc: <i className="ri-arrow-down-s-fill" />,
                              }[header.column.getIsSorted() as string] ?? null}
                            </div>
                            {header.column.getCanFilter() ? (
                              <div>
                                <Filter column={header.column} table={table} />
                              </div>
                            ) : null}
                          </React.Fragment>
                        )}
                      </div>
                    </th>
                  );
                })}
                <th>Actions</th>
              </tr>
            ))}
          </thead>

          <tbody className={tbodyclassName}>
            {getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className={trclassName}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className={tdclassName}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                  <td className={tdclassName}>
                    <div className="flex space-x-2">
                      <button onClick={() => handleEdit(row.original)}>
                        <div className="flex items-center justify-center hover:bg-gray-100 w-12 h-12 text-2xl border rounded-md border-black/10 text-black/80 dark:border-darkborder dark:text-muted">
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                          </svg>

                        </div>
                      </button>

                      <button onClick={() => handleDeleteClick(row.original)}>
                        <div className="flex items-center justify-center hover:bg-gray-100 w-12 h-12 text-2xl border rounded-md border-black/10 text-black/80 dark:border-darkborder dark:text-muted">
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>

          {isTfoot && (
            <tfoot>
              {getFooterGroups()?.map((footer: any, tfKey: number) => (
                <tr key={tfKey}>
                  {footer.headers?.map((tf: any, key: number) => (
                    <th
                      key={key}
                      className="p-3 text-left group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500"
                    >
                      {flexRender(tf.column.columnDef.header, tf.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          )}
        </table>
      </div>

      {/* pagination */}
      {isPagination && (
        <div className={`${PaginationClassName}`}>
          <ul className="inline-flex items-center gap-1">
            <li>
              <button
                className="flex justify-center px-3.5 py-2 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:border-purple dark:hover:text-purple"
                onClick={() => setPageIndex(0)}
              >
                First{" "}
              </button>
            </li>
            <li>
              <button
                className={`flex justify-center px-3.5 py-2 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:border-purple dark:hover:text-purple ${!getCanPreviousPage() && "disabled"
                  }`}
                onClick={previousPage}
              >
                Prev
              </button>
            </li>
            {getPageOptions().map((item: any, key: number) => (
              <React.Fragment key={key}>
                <li>
                  <button
                    className={`flex justify-center px-3.5 py-2 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:border-purple dark:hover:text-purple ${getState().pagination.pageIndex === item &&
                      "text-purple border-purple dark:text-purple dark:border-purple"
                      }`}
                    onClick={() => setPageIndex(item)}
                  >
                    {item + 1}
                  </button>
                </li>
              </React.Fragment>
            ))}
            <li>
              <button
                className={`flex justify-center px-3.5 py-2 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:border-purple dark:hover:text-purple 
                ${!getCanNextPage() && ""}`}
                onClick={() => getCanNextPage() && nextPage()}
              >
                Next{" "}
              </button>
            </li>
            <li>
              <button
                className="flex justify-center px-3.5 py-2 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:border-purple dark:hover:text-purple"
                onClick={() => setPageIndex(getPageOptions().length - 1)}
              >
                Last{" "}
              </button>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default TableContainer;
