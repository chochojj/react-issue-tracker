import { useState, useEffect } from "react";

export function useFetch(apiFunction, ...args) {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiFunction(...args)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [apiFunction, args]);

  return { data, isLoading, isError };
}
