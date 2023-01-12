import React, { useEffect, useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';


const Bookmark = (movie) => {

    console.log(movie)
    console.log('rerender')
    const [isBookmarked, setIsBookmarked] = useState(false)
    // const movie = movieObj.movie

    const getBookmarks = JSON.parse(localStorage.getItem('bookmarkedMovies'))
    // check in existing bookmarks if currentmovie already bookmerked

    useEffect( () => {
            if(getBookmarks){
                console.log('bookmarks exist')
                console.log(getBookmarks)
                const isAlreadyBookmarked = getBookmarks.some(bookmarkMovie => bookmarkMovie.id === movie.movie.id)
                
                if(isAlreadyBookmarked){
                    console.log('bookmarked')
                    console.log(!isBookmarked)
                    setIsBookmarked(true)
                }
                
            //add first bookmarl to local storage
            }
        }
        ,[isBookmarked]
    )
    

    
    const bookmarkIcon = () => {

        console.log('in func')
        console.log("is it bookmarked?"+isBookmarked)
        const existingBookmarks = JSON.parse(localStorage.getItem('bookmarkedMovies'))

        if(existingBookmarks){
            if(!isBookmarked){
                console.log('not bookmarked')
                existingBookmarks.push(movie.movie)
                localStorage.setItem('bookmarkedMovies', JSON.stringify(existingBookmarks))
                setIsBookmarked(true)
                
            }else{
                console.log('is bookmarked')
                const removeBookmark = existingBookmarks.filter(bookmarkMovie => (
                bookmarkMovie.id !== movie.id
                ))
                localStorage.setItem('bookmarkedMovies', JSON.stringify(removeBookmark))
                setIsBookmarked(false)
            }

        }else{
            localStorage.setItem('bookmarkedMovies', JSON.stringify([movie.movie]))
            setIsBookmarked(true)
        }

        return isBookmarked?<div className='bookmark'><BookmarkOutlinedIcon onClick={() => bookmarkIcon()} /></div>
            :<div className='bookmark'> <BookmarkBorderIcon onClick={() => bookmarkIcon()} /></div>

    }
        
        
  return (

    <>
        {isBookmarked && <div className='bookmark'><BookmarkOutlinedIcon onClick={() => bookmarkIcon()} /></div>}
        {!isBookmarked && <div className='bookmark'> <BookmarkBorderIcon onClick={() => bookmarkIcon()} /></div>}
    </>
    
  )
}

export default Bookmark


    


 