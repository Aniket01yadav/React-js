import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // res = reponse
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    return data
}

export default useCurrencyInfo;

