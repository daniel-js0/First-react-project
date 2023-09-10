import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loadPending, setLoadPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() =>{
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoadPending(false);
        setError(null); 
      })
      .catch(err => {
        if(err.name === 'AbortError'){
        console.log('fetch aborted');
        } else{
        setLoadPending(false);
        setError(err.message);
        }
      })
    },1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, loadPending, error, setData };
}
 
export default useFetch;