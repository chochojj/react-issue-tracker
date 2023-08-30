import { useState, useEffect } from "react";

export function useFetch(apiFunction, ...args) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiFunction(...args)
      .then((responseData) => {
        setData(responseData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [apiFunction, ...args]);

  return { data, isLoading };
}
