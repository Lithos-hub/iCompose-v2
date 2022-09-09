const useTable = () => {
  const sortData = (arr: unknown[], field: string, asc: boolean): any[] =>
    arr.sort((a: any, b: any) => {
      const fieldA = a[field].toString().toUpperCase();
      const fieldB = b[field].toString().toUpperCase();

      if (asc ? fieldA < fieldB : fieldA > fieldB) {
        return -1;
      }
      return 0;
    });

  const filterByInput = (arr: unknown[], field: string, input: string): any[] =>
    arr.filter((element: any) =>
      element[field].toString().toLowerCase().includes(input.toLowerCase())
    );

  return {
    sortData,
    filterByInput,
  };
};

export default useTable;
