"use client";

import { useState } from "react";

const useFetch = <T,>(cb: (...args: unknown[]) => Promise<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fn = async (...args: unknown[]) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError(String(e));
      }
    } finally {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }
  };

  return { loading, data, error, fn };
};

export default useFetch;
