
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import BooksTable from "./home/BooksTable";
import BooksCard from "./home/BacksCard";
import React, { useEffect, useState } from 'react'
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
const Home = () => {
    const [books, setbooks] = useState([]) ;
    const [loading, setloading] = useState(false)
    const [showType, setshowType] = useState('table')
    
    useEffect(()=>{
        setloading(true) ;
        axios.get('')
        .then((response)=>{
            setbooks(response.data) ;
            setloading(false) ;
        })
        .catch((error)=>{
            setloading(false) ;
            console.log(error) ;
        })
    },[]) ;
    
    return (
    <div className='p-4'>
        <div className=''>
            <button onClick={()=>{setshowType('table')}}>Table</button>
            <button onClick={()=>{setshowType('card')}}>Card</button>
        </div>
        <div>
            <h1>Books List</h1>
            <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
        </div>
        {loading ? (
            <Spinner/>
        ): showType === 'Table' ? (
            <BooksTable books = {books} />
        ):(
            <BooksCard books = {books} />
        )

        }

    </div>
  )
}

export default Home