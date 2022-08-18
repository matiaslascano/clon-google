import API_KEY from "./keys";
import { useEffect, useState } from "react";


const CONTEXT_KEY = '832239410b7c64de0';

const useGoogleSearch = (textString)=>{
    const [data, setData] = useState(null);

    useEffect(()=>{
        const url =`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${textString}`
        const fetchData = ()=>{
            fetch(url).then(response=>response.json()).then(result=>setData(result))
        }
        fetchData()
        console.log(data)
    }, [textString]);
    return {data}
}

export default useGoogleSearch;