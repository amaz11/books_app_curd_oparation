import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
// import getbookdatabyHooks from '../hooks/getbookdatabyHooks'
import {removeseletedBook, fatchSelectedBook} from '../redux/action/bookAction'


const BookDetails = () => {
    const book = useSelector(state => state.book)
    // console.log(book)
    const {title,author} = book
    const {id} = useParams()
    const dispatch = useDispatch()
    // const [detialbyId] = getbookdatabyHooks(id)
    // console.log("DetailsBy Id_____", detialbyId.data)
    // console.log("DetailsBy Id_____", detialbyId.data.title)
    useEffect(() => {
        if(id && id !=="")dispatch(fatchSelectedBook(id))
   return ()=>{
     dispatch(removeseletedBook())
   }
     },[id])
    return (
        <div>
            {Object.keys(book).length ===0 ?
            <div>Loading.....</div>
            :
            <div className="container">
                <h1>{title}</h1>
        <h2>{author}</h2>
        <Link to="/" className="btn btn-danger">Go Back</Link>
            </div> 
            }
        </div>
    )
}

export default BookDetails
