const addressToString = (address: Object): string => {
  return Object.values(address)
    .filter((value) => !Object.keys(value).includes("lat"))
    .map((part: any) => part)
    .join(", ");
};

export default addressToString;
