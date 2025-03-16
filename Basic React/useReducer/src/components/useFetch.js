import { useEffect, useState, useReducer } from "react";

// Custom hook to fetch data
// export function useFetch(url, options = {}) {
//     const [data, setData] = useState();
//     const [isError, setIsError] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setData(undefined);
//         setIsError(false);
//         setIsLoading(true);

//         const controller = new AbortController();

//         fetch(url, { signal: controller.signal, ...options })
//             .then(res => {
//                 if (res.status === 200) {
//                     return res.json();
//                 }
//                 return Promise.reject(res);
//             })
//             .then(setData)
//             .catch(e => {
//                 if (e.name === "AbortError") {
//                     return;
//                 }
//                 setIsError(true);
//             })
//             .finally(() => {
//                 if (controller.signal.aborted) return;
//                 setIsLoading(false);
//             });
//             return () => controller.abort();
//     }, [url, options]);
//     return { data, isError, isLoading };
// }

// Using useReducer:

const ACTIONS = {
    FETCH_INIT: "FETCH_INIT",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_FAILURE: "FETCH_FAILURE"
}

function reducer(state, {type, payload}) {
    switch (type) {
        case ACTIONS.FETCH_INIT:
            return {
                ...state,
                isError: false,
                isLoading: true
            }
        case ACTIONS.FETCH_SUCCESS:
            return {
                isError: false,
                isLoading: false,
                data: payload.data
            }
        case ACTIONS.FETCH_FAILURE:
            return {
                isError: true,
                isLoading: false
            }
        default:
            throw new Error("Invalid action type");
    }
}
export default function useFetch(url, options = {}) {
    const [state, dispatch] = useReducer(reducer, {
        isError: false,
        isLoading: false
    });

    useEffect(() => {
        dispatch({ type: ACTIONS.FETCH_INIT });

        const controller = new AbortController();

        fetch(url, { signal: controller.signal, ...options })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                return Promise.reject(res);
            })
            .then((data) => {
                dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: {data} });
            })
            .catch(e => {
                if (e.name === "AbortError") {
                    return;
                }
                dispatch({ type: ACTIONS.FETCH_FAILURE });
            });
            return () => controller.abort();
    }, [url]);
    return state;
}