
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Header from './component/Header/Header'
import Bookmarks from './component/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks , setBookmarks]= useState([]);
  const [readingTime,setReadingTime]=useState(0);
  
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
    console.log(blog);
  }

  const handleMarkAsRead = time =>{
    // console.log('marking as read', time);
    setReadingTime(readingTime+time);
  }
  return (
    <>
      <Header></Header> 
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
