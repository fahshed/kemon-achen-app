import { useState } from 'react';

function useApi(apiFunction) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    try {
      setLoading(true);
      const response = await apiFunction(...args);
      console.log('in hook res + ', response);

      setLoading(false);
      setData({ response });
    } catch (e) {
      setError(true);
      console.log('in hook errro+ ');
    }
  };

  return { data, error, loading, request };
}

export default useApi;
