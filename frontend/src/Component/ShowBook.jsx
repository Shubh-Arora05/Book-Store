import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import Spinner from './Spinner';


const ShowBook = () => {
    const [books , setbooks] = useState({}) ;
    const [loading , setloading] = useState(false) ;
    const {id} = useParams() ;
    useEffect(() =>{
      setloading(true) ;
      axios.get(`http://localhost:5555/books/${id}`)
      .then((response) =>{
         setbooks(response.data);
         setloading(false) ; 
      })
      .catch((error) =>{
        console.log(error) ;
        setloading(false) ;
      })
    },[]) 
  return (
    <div className='p-4'>

        <BackButton />
        <h1 className='test-3xl my-4'>Show Book</h1>
        {loading ? (
            <Spinner />
        ):(
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit gap-4'>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Id</span>
                <span>{books._id}</span>
            </div>

            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Title</span>
                <span>{books.title}</span>
            </div>

            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Author</span>
                <span>{books.author}</span>
            </div>
             
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                <span>{books.publishYear}</span>
            </div>

            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                <span>{new Date(books.createdAT).toString()}</span>
            </div>


            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                <span>{new Date(books.updateAT).toString()}</span>
            </div>


            </div>
        )}
    </div>
  )
}

export default ShowBook