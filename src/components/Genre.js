import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import MovieItem from './MovieItem'



function Genre() {
    const {id,name}= useParams();
    const apiKey='fd2a4c25ac9eda692e330c4d102133e2';
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&language=en-US&page=${page}`);
        await setMovies(prev=>[...prev,...res.data.results])
        console.log(movies);
    }, [page])

    

    useEffect(() => {
        window.addEventListener('scroll',(e) => {
            const bottom = e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop === e.target.documentElement.clientHeight;
            console.log(e.target.documentElement.scrollHeight);
            if (bottom){
              console.log(bottom);
              setPage(prev=>prev+1);
            }
          })
    }, []) 

    return (
        <div>
           <h1 className='text-2xl pt-20 bg-gray-800 text-white'>{name}</h1> 
        <div className='  flex flex-wrap'>
           {movies.map((item)=><MovieItem  key={item.id} item={item} />)}

        </div>
        </div>
    )
}

export default Genre
