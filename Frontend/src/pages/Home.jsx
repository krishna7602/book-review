import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyDxmaIz5cleUAv8RDnzmNvOrDls-SfYF9o')
        setBooks(response.data.items)
        console.log(response.data.items)
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }

    fetchBooks()
  }, [])

  const handleBookClick = (id) => {
    navigate(`/book/${id}`)
  }

  return (
    <>
      <div className='flex p-5 justify-center bg-gray-900 border-b-2 border-pink-500'>
        <h1 className='text-4xl p-2 font-bold text-white'>
          Book <br /> <span className='font-semibold italic text-pink-500'>dekho</span>
        </h1>
      </div>
      <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {books.map((book) => (
          <div key={book.id} className='bg-white p-4 rounded shadow cursor-pointer' onClick={() => handleBookClick(book.id)}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className='w-full h-48 object-cover mb-4' />
            <h2 className='text-xl font-bold'>{book.volumeInfo.title}</h2>
            <p className='text-gray-700'>{book.volumeInfo.authors?.join(', ')}</p>
            <p className='text-gray-500'>{book.volumeInfo.publishedDate}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
