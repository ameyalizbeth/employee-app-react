import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: () => `employee`,
      providesTags:['employee']
    }),
    getEmployeeById:builder.query({
      query:(id)=>`employee/${id}`,
      providesTags:['employeeid']

    }),
    addNewEmployee: builder.mutation({
      query: initialPost => ({
        url: '/employee',
        method: 'POST',
        // Include the entire post object as the body of the request
        body: initialPost
      }),
      invalidatesTags:['employee']
    }),
    updateEmployee: builder.mutation({
      query: initialPost => ({
        url: '/employee',
        method: 'PUT',
        // Include the entire post object as the body of the request
        body: initialPost
      }),
      invalidatesTags:['employee'],
      invalidatesTags:['employeeid']
    }),
    deleteEmployee:builder.mutation({
      query:id=>({
        url:`/employee/${id}`,
        method:'DELETE'
      }),
      invalidatesTags:['employee']
    })
  }),
  
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmployeeQuery, useAddNewEmployeeMutation, useDeleteEmployeeMutation,useGetEmployeeByIdQuery,useUpdateEmployeeMutation} = employeeApi