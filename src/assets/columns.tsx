import React from "react";

const addressToString = (address: Object): string => {
  console.log(address);
  return Object.values(address)
    .filter((value) => !Object.keys(value).includes("lat"))
    .map((part: any) => part)
    .join(", ");
};

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

export default columns;
