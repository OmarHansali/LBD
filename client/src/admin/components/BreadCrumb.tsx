/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const BreadCrumb = ({title, pageType} : any) => {
  return (
    <React.Fragment>
      <div>
        <nav className="w-full">
          <ul className="space-y-2 detached-breadcrumb">
            <li className="text-xs dark:text-white/80">{pageType}</li>
            <li className="text-xl font-semibold text-black dark:text-white">
              {title}
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default BreadCrumb;
