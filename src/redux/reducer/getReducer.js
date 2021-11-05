import { actions } from "react-redux-form";
import { actionTypes } from "../contains/actionTypes";


const initialSatate = {
    bookArr:[],
    book:{},
    loading:false,
    errorMsg:"",
    isResponses:false
}

export const getReducer = (state=initialSatate,action)=>{
    switch (action.type) {
        case actionTypes.GET_CONTACT_LOADING:
            return{
                ...state,
                loading:true,
                errorMsg:""
            }
        case actionTypes.GET_CONTACT:
            return {
                ...state,
                bookArr: action.payload,
                loading:false,
                errorMsg:""
            }

            case actionTypes.GET_CONTACT_FAIL:
            return {
                ...state,
                loading:false,
                errorMsg:"Something Went WRONG"
            }
            // Post Book
            case actionTypes.POST_BOOK:
            return {
                ...state,
                book:action.payload,
                loading:false
            }
            // Update Book
            case actionTypes.UPDATA_BOOK:
                return{
                    ...state,
                    bookArr:[state.bookArr, action.payload],
                    loading:false
                }
            // Delete Book
            case actionTypes.DELETE_BOOK:
                return{
                    ...state,
                    bookArr:[action.payload],
                    loading:false
                }    
    
        default:
            return state
    }
}

export const selectBookReducer=(state={},action)=>{
    switch (action.type) {
        case actionTypes.SELECT_BOOK:
        return {...state, ...action.payload}
        case actionTypes.REMOVE_SELECT_BOOK:
            return{}
        default:
            return state
    }
}