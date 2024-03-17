import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props: any) => <td>{props.getValue()}</td>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (props: any) => <td>{props.getValue()}</td>,
  },
  {
    accessorKey: "username",
    header: "User name",
    cell: (props: any) => <td>{props.getValue()}</td>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props: any) => <td>{props.getValue()}</td>,
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: (props: any) => <td>{JSON.stringify(props.getValue())}</td>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: (props: any) => <td>{props.getValue()}</td>,
  },
  {
    accessorKey: "website",
    header: "Website",
    cell: (props: any) => <td>{props.getValue()}</td>,
  },
];

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
    <table width={500} className="table">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <td key={header.id}>
                {header.column.columnDef.header?.toString()}
              </td>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
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
