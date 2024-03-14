import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Observable, take } from "rxjs";
import Table from './shared/table';

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



function App() {


  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const result = fetchData(new Request(url, {
      method: 'GET',
    }));

    result.pipe(take(1)).subscribe((res: any) => {
      setData(res);
    });
  }, []);



  return (
    <Box width={500}>
      <Table></Table>
    </Box>
  );
}

export default App;
