import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

import columns from "../../assets/columns";

import "./table.css";

interface TableProps {
  data: Array<any> | [];
  isLoading: boolean;
}

function Table(tableProps: TableProps) {
  const table = useReactTable({
    data: tableProps.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (tableProps.isLoading) {
    return <p>loading...</p>;
  }

  return (
    <table className="table">
      <thead className="thead">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr className="thead__row" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.column.columnDef.header?.toString()}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="tbody">
        {table.getRowModel().rows.map((row) => (
          <tr className="tbody__row" key={row.id}>
            {row
              .getVisibleCells()
              .map((cell) =>
                flexRender(cell.column.columnDef.cell, cell.getContext())
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
