import { PropsWithChildren } from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

const queryClient = new QueryClient();

export function Provider ({children}: PropsWithChildren){
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}