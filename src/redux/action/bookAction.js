import { actionTypes } from "../contains/actionTypes";
import { deletePostApiDetails, getApiDetails,getApiDetailsbyID,postApiDetails, updatePostApiDetails } from "../../api/curd";

export const getBooks =  ()=>{
    return async (dispatch) => {
        try{

            dispatch({
                type: actionTypes.GET_CONTACT_LOADING
            })
            const res = await getApiDetails();
        // console.log("Response:", res)
        dispatch({
            type: actionTypes.GET_CONTACT,
            payload: res.data
        })
        }catch{
            dispatch({
                type: actionTypes.GET_CONTACT_FAIL
            })
        }
        
    }
}

export const postBook =  (data)=>{
    return (dispatch)=>{
        try {
            postApiDetails(data)
            dispatch({
                type: actionTypes.POST_BOOK,
                payload:data
            })
        }catch(error){}
    }
}

export const updateBookbyId = (data,id)=>(dispatch)=>{
    try {
        updatePostApiDetails(data,id)
        dispatch({
            type: actionTypes.UPDATA_BOOK,
            payload:{data,id}
        })

    } catch (error) {
        
    }
}

export const deleteBookbyId = (id)=>async (dispatch)=>{
    try {
        const res =  await deletePostApiDetails(id)
        dispatch({
            type: actionTypes.DELETE_BOOK,
            payload:res
        })

    } catch (error) {
        
    }
}



export const fatchSelectedBook = (id) =>async(dispatch)=>{
    try{
        const res = await getApiDetailsbyID(id)
        dispatch({
        type:actionTypes.SELECT_BOOK,
        payload:res.data
    })
    }catch{
        
    }
}

export const removeseletedBook = () =>{

    return{
        type:actionTypes.REMOVE_SELECT_BOOK
}}

