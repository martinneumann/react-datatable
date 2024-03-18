import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";

import "./table.css";
import addressToString from "../../utils/addressToString";
import { Checkbox } from "@mui/material";

interface TableProps {
  data: Array<any> | [];
  isLoading: boolean;
}

function Table(tableProps: TableProps) {
  const [selectedRows, setSelectedRows] = useState(new Set<string>());
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const handleRowClick = (id: string) => {
    // idea: do not use state, since this only changes after the next render.
    if (selectedRows.has(id))
      setSelectedRows((a: Set<string>) => {
        a.delete(id);
        return new Set(a);
      });
    else setSelectedRows((a: Set<string>) => new Set(a).add(id));
  };

  const columns = [
    {
      accessorFn: (row: any) => row,
      id: "id",
      header: "",
      cell: (id: any) => (
        <td>
          <Checkbox checked={selectedRows.has(id.getValue())}></Checkbox>
        </td>
      ),
    },
    {
      accessorKey: "id",
      header: "Dataset ID",
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
      cell: (props: any) => <td>{addressToString(props.getValue())}</td>,
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

  const table = useReactTable({
    data: tableProps.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  if (tableProps.isLoading) {
    return <p>loading...</p>;
  }

  return (
    <table className="table">
      <thead className="thead">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="thead__row">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                className={header.column.getCanSort() ? "sortable" : undefined}
              >
                {header.column.columnDef.header?.toString()}
                {
                  {
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string]
                }
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="tbody">
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="tbody__row"
            onClick={() => handleRowClick(row.original.id)}
          >
            {row
              .getVisibleCells()
              .filter((cell) => {
                return cell.column.id !== "check";
              })
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
