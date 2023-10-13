import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Car } from "../models/index";
import { HttpReqeusttypes } from "core/types";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

// Define a service using a base URL and expected endpoints
export const carsApi = createApi({
  reducerPath: "carsApi",
  tagTypes: ["Cars"],
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),

  /**
   * Returns an object containing various endpoints for interacting with cars.
   * @param {Function} builder - The builder function.
   * @return {Object} - The object containing the endpoints.
   */
  endpoints: (builder) => ({
    /**
     * Retrieves all cars.
     * @returns {Array<Car>} - The array of cars.
     */
    getCars: builder.query<Car[], void>({
      query: () => `cars`,
      providesTags: ["Cars"],
    }),

    /**
     * Retrieves a car by its ID.
     * @param {string} id - The ID of the car.
     * @returns {Car} - The car object.
     */
    getCarsById: builder.query<Car, string>({
      query: (id) => `cars/${id}`,
      providesTags: ["Cars"],
    }),

    /**
     * Retrieves a car by its name.
     * @param {string} name - The name of the car.
     * @returns {Car} - The car object.
     */
    getCarsByName: builder.query<Car, string>({
      query: (name) => `cars?name=${name}`,
    }),

    /**
     * Retrieves a car by its brand.
     * @param {string} name - The name of the car.
     * @returns {Car} - The car object.
     */
    getCarsByBrand: builder.query<Car, string>({
      query: (brand) => `cars?brand=${brand}`,
    }),

    /**
     * Adds a new car.
     * @param {Partial<Car>} car - The car object to add.
     * @returns {Car} - The added car object.
     */
    addCar: builder.mutation<Car, Partial<Car>>({
      query: (car) => ({
        url: `cars`,
        method: HttpReqeusttypes.POST,
        body: car,
      }),
      invalidatesTags: ["Cars"],
    }),

    /**
     * Updates an existing car.
     * @param {Partial<Car>} car - The car object to update.
     * @returns {Car} - The updated car object.
     */
    updateCar: builder.mutation<Car, Partial<Car>>({
      query: (car) => ({
        url: `cars/${car.id}`,
        method: HttpReqeusttypes.PATCH,
        body: car,
      }),
      invalidatesTags: ["Cars"],
    }),

    /**
     * Deletes a car by its ID.
     * @param {string} id - The ID of the car to delete.
     * @returns {Car} - The deleted car object.
     */
    deleteCar: builder.mutation<Car, string>({
      query: (id) => ({
        url: `cars/${id}`,
        method: HttpReqeusttypes.DELETE,
      }),
      invalidatesTags: ["Cars"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCarsQuery,
  useGetCarsByNameQuery,
  useGetCarsByIdQuery,
  useGetCarsByBrandQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carsApi;
