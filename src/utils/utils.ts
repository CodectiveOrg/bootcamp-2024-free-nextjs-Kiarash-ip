export const createQueryString = (
  searchParams: URLSearchParams,
  name: string,
  value: string,
) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  return params.toString();
};

export const deleteQueryString = (
  searchParams: URLSearchParams,
  name: string,
) => {
  const params = new URLSearchParams(searchParams.toString());
  params.delete(name);
  return params.toString();
};
