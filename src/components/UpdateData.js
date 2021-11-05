import React, { useEffect } from 'react'
import { Link,useParams,useHistory } from 'react-router-dom'
import { Form, Control, Errors, actions } from 'react-redux-form'
import { useDispatch, useSelector } from 'react-redux'
import {getBooks, updateBookbyId} from '../redux/action/bookAction'
import { toast } from 'react-toastify'
import getbookdatabyHooks from '../hooks/getbookdatabyHooks'

const required = val => val && val.length

const UpdateData = () => {
    const booksState = useSelector(state=>state.getReducer.bookArr)
    const bookformState  = useSelector(state => state.books)
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    
    // console.log(bookformState)
    // console.log(booksState)
    const [detialbyId] = getbookdatabyHooks(id)
    // console.log("DetailsBy Id_____", detialbyId)
    useEffect(() => {
        const bookData = ()=>{
            if(detialbyId.data){
                // console.log(detialbyId.data)
                dispatch(actions.change('books', 
                {title:detialbyId.data.title,
                 author:detialbyId.data.author   
                }))
                
            }
        }
        bookData()
    }, [detialbyId.data]);


    useEffect(() => {
       dispatch(getBooks())
    },[])
    
    const handelSubmit = ()=>{
        // console.log(value)
        const checkTitle = booksState.find(book=>book.title === bookformState.title && bookformState.title)
        if(checkTitle){
            return toast.error('This Book Already Exist and Nothing to Update')
        }
        else{
        dispatch(actions.reset('books'))
        dispatch(updateBookbyId(bookformState,id))
        return toast.success('Update and Edit Success') && history.push("/")
        
    }
    }
    
    return (
        <div>
            <h1 className='display-3  my-5'>Update and Edit Books {id}</h1>
            <div className="container">
            <div className='mx-5 form-div'>
            <Form model='books' onSubmit={handelSubmit} >
            <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Title</label>
                    <Control.text model="books.title" type="text" className="form-control" validators={{required}} />
                    <Errors model=".title" className="text-danger" show="touched" messages={{required:'Please Enter Book Name' } } />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Author</label>
                    <Control.text model="books.author" type="text"  className="form-control" validators={{required}} />
                    <Errors model=".author" className="text-danger" show="touched" messages={{required:'Please Enter Author Name'}} />
                </div>
                <div className="col-12 my-3">
                    <button type="submit" className="btn btn-primary mx-4">Update Book</button>
                    <Link to="/"  className="btn btn-danger">Go Back</Link>
                </div>
            </Form>
            </div>
            </div>
        </div>
    )
}

export default UpdateData
