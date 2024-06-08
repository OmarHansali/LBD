import React, { Fragment, useEffect, useState } from "react";

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
  SearchPlaceholder,
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

  return (
    <Fragment>
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

        <div>
          {isGlobalFilter && (
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="form-input"
              placeholder="Search..."
            />
          )}
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

      {isPagination && (
        <div className={PaginationClassName}>
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
                className={`flex justify-center px-3.5 py-2 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:border-purple dark:hover:text-purple ${
                  !getCanPreviousPage() && "disabled"
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
                    className={`flex justify-center px-3.5 py-2 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:border-purple dark:hover:text-purple ${
                      getState().pagination.pageIndex === item &&
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
