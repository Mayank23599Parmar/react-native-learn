import { useState, useEffect } from "react"
import DOMParser from 'react-native-html-parser';
const useFechSectionData = (data) => {
    const [isLoading, setIsLoading] = useState(false);
    const [pageData, setPageData] = useState(null);
    const [error, setError] = useState(null);
    let sectionsIDs = Object.values(data)
    let sectionsKeys = Object.keys(data)
    const fetchHomePageData = async () => {
        try {
            setIsLoading(true)
            let dataJson = []
            let res = await fetch(`https://lucent-theme-6.myshopify.com/?sections=${sectionsIDs.toString()}`);
            let data = await res.text()
            for (let index = 0; index < sectionsIDs.length; index++) {
                const element = sectionsIDs[index];
                let pdata = JSON.parse(data)[element]
                const parser = new DOMParser.DOMParser();
                const parsed = parser.parseFromString(pdata, 'text/html');
                let obj = {};
                obj.type = sectionsKeys[index]
                obj.data = JSON.parse(parsed.firstChild.childNodes[0].data);
                dataJson.push(obj)
            }
            if (dataJson.length > 0) {
                setPageData(dataJson)
                setIsLoading(false)
            }
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchHomePageData()
    }, [])
 return { isLoading, pageData, error }
}
export default useFechSectionData;