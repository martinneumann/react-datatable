import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Observable, take } from "rxjs";

function fetchData(url: string | URL | Request) {
  return new Observable(observer => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        observer.next(data);
        observer.complete();
      })
      .catch(error => {
        observer.error(error);
      });
  });
}



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
  }
]


function App() {
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


  useEffect(() => {

    const url = "https://jsonplaceholder.typicode.com/users";

    const result = fetchData(new Request(url, {
      method: 'GET',
    }));

    result.pipe(take(1)).subscribe((res: any) => {
      console.log(res)
      console.log(_data)
      setData(res);
    });
  }, []);



  console.log(table.getHeaderGroups())



  return (
    <Box width={500}>
      <table width={500} className="table">
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
    </Box>
  );
}

export default App;
