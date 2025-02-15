import { useState } from "react";
import { useDidMount } from "rooks";

export default function useQuery<T>({ promise }: { promise: Promise<T> }) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [isPending, setIsPending] = useState<boolean>(true);

  useDidMount(async () => {
    try {
      const post = await promise;
      setData(post);
    } catch (error: any) {
      setError(error);
    }
    setIsPending(true);
  });

  return {
    data,
    error,
    isPending,
  };
}
