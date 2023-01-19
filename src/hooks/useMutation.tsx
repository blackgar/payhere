import { useState } from 'react';
import { UseMutationResult, UseMutationState } from '@/types/api';

function useMutation<T = any>(): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: true,
    data: undefined,
    error: undefined,
  });

  function mutation() {
    setState(prev => ({ ...prev, loading: true }));
    fetch(`${process.env.REACT_APP_API_URL}search/repositories?q=Angular`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setState(prev => ({ ...prev, data }));
      })
      .catch(error => setState(prev => ({ ...prev, error })))
      .finally(() => setState(prev => ({ ...prev, loading: false })));
  }
  return [mutation, { ...state }];
}
export default useMutation;
