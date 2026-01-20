"use client";

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

function Example() {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () =>
//       fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
//         res.json()
//       ),
//   });

    const [data, setData] = useState<any>({
        name: '',
        description: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.github.com/repos/tannerlinsley/react-query');
      const data = await res.json();
      console.log('res', data);
      setData(data);
    };
    fetchData();
  }, []);

//   if (isLoading) return 'Loading...';
//   if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}

function TanstackReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

export default TanstackReactQuery;