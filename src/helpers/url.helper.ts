import queryString from 'query-string';

export function parse(location: any) {
  return queryString.parse(location.search);
}

export const create = (location: any, query?: any, hash?: any) => ({
  ...location,
  ...(query && {
    search: queryString.stringify({
      ...query,
    }),
  }),
  ...(hash && {
    hash: queryString.stringify({
      ...hash,
    }),
  }),
});

const update = (location: any, query?: any, hash?: any) => ({
  ...location,
  ...(query && {
    search: queryString.stringify({
      ...queryString.parse(location.search),
      ...query,
    }),
  }),
  ...(hash && {
    hash: queryString.stringify({
      ...queryString.parse(location.hash),
      ...hash,
    }),
  }),
});

export default {
  parse,
  create,
  update,
};
