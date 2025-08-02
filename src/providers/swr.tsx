"use client";

import { ReactNode } from "react";
import axios from "axios";
import { SWRConfig } from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function SWRProvider({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        errorRetryCount: 3,
      }}
    >
      {children}
    </SWRConfig>
  );
}
