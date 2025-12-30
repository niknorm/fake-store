import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Products } from "../model/Products";

interface GetProductsArgs {
  offset: number;
  limit: number;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products[], GetProductsArgs>({
      query: ({ offset, limit }) => `/products?offset=${offset}&limit=${limit}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
