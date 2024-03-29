import React, { useEffect, useState } from "react";
import { Observable, take } from "rxjs";
import Table from "../components/table/table";

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

export default function Data() {
  const [data, setData] = useState(Array<any>);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const result = fetchData(
      new Request(TEST_URL, {
        method: "GET",
      })
    );

    result.pipe(take(1)).subscribe((res: any) => {
      // Merge data (here only for check boxes)
      if (data) setData([...data, ...res]);
      else setData(res);
      setIsLoading(false);
    });
  }, []);

  return <>{<Table data={data} isLoading={isLoading}></Table>}</>;
}
