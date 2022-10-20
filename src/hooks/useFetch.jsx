import { useEffect, useState } from "react";
import { axiosInstance as axios } from "../config/axiosInstance";

const useFetch = (url, options) => {
  let [response, setResponse] = useState([]);
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, options);
        const json = await res.data.data;
        setResponse(json);
      } catch (error) {
        error ? setError(error.message) : setError("");
      }
      setLoading(false);
    };
    fetchData();
  }, [url, options]);

  return { response, error, loading, setResponse };
};

export default useFetch;
