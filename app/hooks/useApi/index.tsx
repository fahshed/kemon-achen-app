import { useState } from 'react';

function useApi(apiFunction) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (arg) => {
    try {
      setLoading(true);
      console.log('arg ', arg);
      const response = await apiFunction(arg);
      console.log('hook ', response);
      setLoading(false);
      setData(response);
    } catch (e) {
      setError(true);
      console.log('useApi hook error');
    }
  };

  return { data, error, loading, request };
}

export default useApi;
