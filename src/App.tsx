import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Observable, take } from "rxjs";
import Table from "./shared/table";

const TEST_URL = "https://jsonplaceholder.typicode.com/users";

function fetchData(url: string | URL | Request) {
  return new Observable((observer) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        observer.next(data);
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
  });
}

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const result = fetchData(
      new Request(TEST_URL, {
        method: "GET",
      })
    );

    result.pipe(take(1)).subscribe((res: any) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box width={500}>{<Table data={data} isLoading={isLoading}></Table>}</Box>
  );
}

export default App;
