import { useState, useEffect } from "react";

// Function Hook name
function useCurrencyInfo(currency){

    // useEffect Hook
    useEffect(() => {

        // Creating the useState to store the data 
        const [data, setData] = useState({})

        //API call
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        // Now Doing the Chaining
        // To convert your response into the JSON format
        .then((response) => response.json())
        // To store the data into some variable or function
        .then((response) => setData(response[currency]))
        console.log(data);
        
    }, [currency])
    console.log(data);
    // To return the data
    return data
}

export default useCurrencyInfo