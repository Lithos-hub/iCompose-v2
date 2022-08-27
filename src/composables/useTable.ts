const useTable = () => {
  const sortData = (arr: unknown[], field: string, asc: boolean) =>
    arr.sort((a: unknown, b: unknown) => {
      const fieldA = a[field].toString().toUpperCase();
      const fieldB = b[field].toString().toUpperCase();

      if (asc ? fieldA < fieldB : fieldA > fieldB) {
        return -1;
      }
      return 0;
    });

  const filterByInput = (arr: unknown[], field: string, input: string) =>
    arr.filter((element) =>
      element[field].toString().toLowerCase().includes(input.toLowerCase())
    );

  return {
    sortData,
    filterByInput,
  };
};

export default useTable;
