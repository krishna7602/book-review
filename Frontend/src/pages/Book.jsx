import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Book = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDxmaIz5cleUAv8RDnzmNvOrDls-SfYF9o`)
        setBook(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching book:', error)
      }
    }

    fetchBook()
  }, [id])

  if (!book) {
    return <div>Loading...</div>
  }

  return (
    <div className='p-5 w-full h-full flex justify-center items-center'>
      <div className='bg-white p-4 rounded flex shadow border border-gray-200'>
        <img src={book.volumeInfo.imageLinks?.small} alt={book.volumeInfo.title} className='w-56  object-cover mb-4' />
        <div className='flex flex-col p-6 text-center '>
        <h2 className='text-2xl font-bold'>{book.volumeInfo.title}</h2>
        <h3 className='text-xl italic'>{book.volumeInfo.subtitle}</h3>
        <p className='text-gray-700'>{book.volumeInfo.authors?.join(', ')}</p>
        <p className='text-gray-500'>{book.volumeInfo.publisher}, {book.volumeInfo.publishedDate}</p>
        <p className='text-gray-600 mt-2'>{book.volumeInfo.description}</p>
        <p className='text-gray-600 mt-2'>Page Count: {book.volumeInfo.pageCount}</p>
        <p className='text-gray-600 mt-2'>Print Type: {book.volumeInfo.printType}</p>
        <p className='text-gray-600 mt-2'>Maturity Rating: {book.volumeInfo.maturityRating}</p>
        <a href={book.volumeInfo.previewLink} className='text-blue-500 mt-2'>Preview Link</a>
        <a href={book.volumeInfo.infoLink} className='text-blue-500 mt-2'>Info Link</a>
        <a href={book.saleInfo.buyLink} className='text-blue-500 mt-2'>Buy Link</a>
        <a href={book.accessInfo.webReaderLink} className='text-blue-500 mt-2'>Web Reader Link</a>
        <a href={book.accessInfo.epub?.downloadLink} className='text-blue-500 mt-2'>Download EPUB</a>
        <a href={book.accessInfo.pdf?.downloadLink} className='text-blue-500 mt-2'>Download PDF</a>
        </div>
      </div>
    </div>
  )
}

export default Book
