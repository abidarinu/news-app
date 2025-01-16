import { API_KEY } from "@/constants/Key";
import { NewsData } from "@/models";
import api from "../api";

const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchNewsList: build.query<
      NewsData,
      {
        query?: string;
      }
    >({
      query: ({ query = null }) => ({
        url: "everything",
        params: {
          q: query,
          apiKey: API_KEY,
        },
      }),
      providesTags: ["News"],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ previousArg, currentArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useFetchNewsListQuery } = newsApi;
