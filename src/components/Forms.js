import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Control, Errors, actions } from 'react-redux-form'
import { useDispatch, useSelector } from 'react-redux'
import {getBooks, postBook} from '../redux/action/bookAction'
import { toast } from 'react-toastify'

const required = val => val && val.length

const Forms = () => {
    const booksState = useSelector(state=>state.getReducer.bookArr)
    const bookformState  = useSelector(state => state.books)
    const dispatch = useDispatch()
    // console.log(bookformState)
    // console.log(booksState)
    useEffect(() => {
       dispatch(getBooks())
    },[])
    
    const handelSubmit = ()=>{
        // console.log(value)
        const checkTitle = booksState.find(book=>book.title === bookformState.title && bookformState.title)
        if(checkTitle){
            return toast.error('This Book Already Exist')
        }
        else{
        dispatch(actions.reset('books'))
        dispatch(postBook(bookformState))
        return toast.success('Add Success')
    }
    }

    return (
        <div>
            <h1 className='display-3  my-5'>Add New Books</h1>
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
                    <Control.text model="books.author" type="text" className="form-control" validators={{required}} />
                    <Errors model=".author" className="text-danger" show="touched" messages={{required:'Please Enter Author Name'}} />
                </div>
                <div className="col-12 my-3">
                    <button type="submit" className="btn btn-primary mx-4">Add Book</button>
                    <Link to="/"  className="btn btn-danger">Go Back</Link>
                </div>
            </Form>
            </div>
            </div>
        </div>
    )
}

export default Forms
