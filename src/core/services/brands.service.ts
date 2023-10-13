import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Brand, Car } from "../models/index";
import { HttpReqeusttypes } from "core/types";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

// Define a service using a base URL and expected endpoints
export const brandsApi = createApi({
  reducerPath: "brandApi",
  tagTypes: ["Brands"],
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),

  /**
   * Returns an object containing various endpoints for interacting with cars.
   * @param {Function} builder - The builder function.
   * @return {Object} - The object containing the endpoints.
   */
  endpoints: (builder) => ({
    /**
     * Retrieves all brands.
     * @returns {Array<Brand>} - The array of brands.
     */
    getBrands: builder.query<Brand[], void>({
      query: () => `brands`,
      providesTags: ["Brands"],
    }),

    /**
     * Retrieves a brand by its name.
     * @param {string} name - The name of the brand.
     * @returns {Brand} - The brand object.
     */
    getBrandsByName: builder.query<Car, string>({
      query: (name) => `brand?name=${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBrandsQuery, useGetBrandsByNameQuery } = brandsApi;
