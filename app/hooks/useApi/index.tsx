import { useState } from 'react';

function useApi(apiFunction) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...arg: any[]) => {
    try {
      setLoading(true);
      const response = await apiFunction(...arg);
      console.log('in hook+ ' + response);
      setLoading(false);
      setData(response);
    } catch (e) {
      setError(true);
    }
  };

  return { data, error, loading, request };
}

export default useApi;
