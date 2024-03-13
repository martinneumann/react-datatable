import { RowModel, Table, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React, { useState } from "react";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props: any) => <td>{props.getValue()}</td>
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (props: any) => <td>{props.getValue()}</td>
  }
]


function App() {

  const _data = [
    {
      "id": 1,
      "name": "hello"
    },
    {
      "id": 2,
      "name": "world"
    },
  ];

  const [data, setData] = useState(_data);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  console.log(table.getHeaderGroups())



  return (
    <table className="table">
      <thead>
        {table.getHeaderGroups().map(headerGroup =>
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(
              header =>
                <td>{header.column.columnDef.header?.toString()}</td>

            )}
          </tr>)}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row =>
          <tr key={row.id}>
            {row.getVisibleCells().map(cell =>
              flexRender(cell.column.columnDef.cell, cell.getContext())
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default App;
