import { useState } from 'react';

import Api from '../../api';

export default function useApi(apiFunction) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    console.log('request got');
    setError(false);
    setLoading(true);

    try {
      const response = await apiFunction.call(Api, ...args);
      setData(response);
      setLoading(false);
      return response;
    } catch (e) {
      setError(true);
      setData(e);
      setLoading(false);
      return { error: e };
    }
  };

  return { data, error, loading, request };
}
