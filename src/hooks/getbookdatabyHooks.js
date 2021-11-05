import { useEffect, useState } from "react";
import { getApiDetailsbyID } from "../api/curd";

//custom Hook to edit indivisual data by id and show it to input field
export default (props)=>{
    const [detialbyId, setDetialbyId] = useState({});
    const getbookdatabyHooks = async (requestId)=>{
            // console.log("What is request Id___", requestId)
            try{
                const res = await getApiDetailsbyID(requestId);
                // console.log("Response:", res)
                setDetialbyId(res)
                }catch{}
        }
    useEffect(() => {
        getbookdatabyHooks(props)
    }, [])

    return [detialbyId]
}
