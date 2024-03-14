import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
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
    },
    {
        accessorKey: "username",
        header: "User name",
        cell: (props: any) => <td>{props.getValue()}</td>
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: (props: any) => <td>{props.getValue()}</td>
    },
    {
        accessorKey: "address",
        header: "Address",
        cell: (props: any) => <td>{JSON.stringify(props.getValue())}</td>
    }, {
        accessorKey: "phone",
        header: "Phone",
        cell: (props: any) => <td>{props.getValue()}</td>
    }, {
        accessorKey: "website",
        header: "Website",
        cell: (props: any) => <td>{props.getValue()}</td>
    },
]

function Table() {
    let _data = [
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

    return (
        <table width={500} className="table" >
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
        </table >
    )
}

export default Table;