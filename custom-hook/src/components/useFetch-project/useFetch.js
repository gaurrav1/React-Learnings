import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setData(undefined);
        setError(false);
        setLoading(true);
        const controller = new AbortController();

        fetch(url, { signal: controller.signal, ...options})
            .then((res) => {
                if (res.status === 200) return res.json();
                return Promise.reject(res);
            })
            .then(setData)
            .catch((e) => {
                if (e.name === "AbortError") return;
                setError(true)
                console.error("Error fetching data" + e)
            })
            .finally(() => {
                if (controller.signal.aborted) return;
                setLoading(false);
            })

            return () => controller.abort();
    }, [url]);

    return {
        data: data,
        isLoading: loading,
        isError: error,
    }
}