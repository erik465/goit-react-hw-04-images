import React, {useState, useEffect} from 'react'

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import { fetchImages } from "api";

const App = () => {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    if(query !== ''){
        fetchImages(query, page)
            .then(res =>{
                setLoading(true)
                if(page !== 1){
                  setImages(prevState => {
                    console.log([...prevState, ...res])
                    return [...prevState, ...res]
                  })
                }else{
                  setImages(res)
                }
            }).then(() =>{
                setLoading(false)
            });
    }
    
    }, [query, page])

 

  const changeQuery = newQuery => {
    setQuery(newQuery)
  }

  const handleLoadMore = () =>{
    setPage(prevState => prevState + 1)
  }
  
  return (
    <>
        <Searchbar changeQueue={changeQuery}/>
        {loading ? <Loader/> : <ImageGallery images={images}/>}
        {images.length >= 12 ? <Button loadMore={handleLoadMore}/> : null}
      </>
  )
}

export default App
