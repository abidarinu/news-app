import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react'
import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2/",
  timeout: 60_000,
})

export function handleError(error: unknown): String {
  if (!axios.isAxiosError(error)) {
    return 'Something went wrong'
  }
  if (!error.request) {
    return 'Disconnected'
  }
  if (!error.response) {
    return 'Something went wrong'
  }

  const {
    response: { status, data },
  } = error

  if (status != 422 && data.message) {
    return data
  }

  if (status === 422) {
    return data
  }

  return 'Something went wrong'
}

const axiosBaseQuery = (): BaseQueryFn<AxiosRequestConfig> => async (args) => {
  try {
    const result = await axiosInstance(args)
    return { data: result.data }
  } catch (axiosError) {
    const err = handleError(axiosError)
    return {
      error: err,
    }
  }
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  tagTypes: ['News'],
})

export default api
