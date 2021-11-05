import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBooks,deleteBookbyId } from '../redux/action/bookAction'
import _ from 'lodash'
import { toast } from 'react-toastify'

const Home = () => {
    const bookState = useSelector(state=>state.getReducer)
    // console.log(bookState)

    const dispatch = useDispatch()



    useEffect(()=>{
        dispatch(getBooks())
    }, [dispatch])

    const renderListOfTr = ()=>{ 

        if(bookState.loading){
            return (<tr>
                <th scope="row">#</th>
                <td>Loading Please Wait</td>
            </tr>)
        }
        
        if(!_.isEmpty(bookState.bookArr))
        {
            return bookState? bookState.bookArr.map(contact=>{
                    const {id,title,author}=contact
                    const deleteHandele = (e)=>{
                       dispatch(deleteBookbyId(id))
                        window.location.reload(false)
                        toast.error('Book Has been Deleted')
                    }
                    return(
                <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                        <button onClick={deleteHandele} className="btn mx-1 my-2"><i className="fas fa-trash-alt" /></button>
                        <Link to={`/updatedata/${id}`} className="btn mx-1 my-2"><i className="fas fa-user-edit" /></Link>
                        <Link to={`/book/${id}`} className="btn mx-1 my-2"><i className="fas fa-eye" /></Link>
                    </td>
                </tr>
        )
    }):null}

    if(bookState.errorMsg !==""){
        return (<tr>
            <th scope="row">#</th>
            <td>{bookState.errorMsg}</td>
        </tr>)
    }

}
    return (
        <div>
            <h1 className='display-3 mx-5'>React Redux CURD With Axios And Json Server</h1>
           <div className="container">
           <h1 className='display-3 mx-5'>Book List</h1>
               <Link to="/booksForm" className='btn btn-success my-5 mx-1'>Add Book</Link>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
   {renderListOfTr()}
  </tbody>
</table>
           </div>
        </div>
    )
}

export default Home
