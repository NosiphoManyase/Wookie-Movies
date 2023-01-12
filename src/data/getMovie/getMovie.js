import { useQuery } from "react-query"

const GetMovie = (query) => {
    const { isLoading, error, data } = useQuery(query, () =>
     fetch(`https://wookie.codesubmit.io/movies?q=${query}`, {
        headers: new Headers ({
            "Authorization": "Bearer Wookie2021"
        })
     })
     .then(res =>
       res.json()
     )
   )
   
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
  
  return data
}

export {GetMovie}