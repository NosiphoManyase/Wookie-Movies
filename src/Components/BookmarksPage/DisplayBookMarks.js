import React from 'react'
import './styles.scss'


const DisplayBookMarks = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedMovies'))
    console.log(bookmarks)

  return (
    <div>
        {bookmarks? 
            <div className='bookmarks-body'>
            {bookmarks.length>0?bookmarks.map(bookmark => (
                <div className='bookmarks-image'>
                    <img key={`img/${bookmark.id}`} src={bookmark.poster} />
                </div>
            )):<div style={{margin: '0 auto'}}><h3>You have no movie titles saved to bookmarks yet..</h3></div>}
        </div>
        :<div style={{margin: '0 auto'}} className='bookmarks-body'><h3>You have no movie titles saved to bookmarks yet..</h3></div>}
    </div>
    
  )
}

export default DisplayBookMarks