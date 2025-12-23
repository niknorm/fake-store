
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Products } from '../model/Products'


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://api.escuelajs.co/api/v1' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products[], void>({
      query: () => `/products`,
    }),
  }),
})

export const { useGetProductsQuery } = productApi