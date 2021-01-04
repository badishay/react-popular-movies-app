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
    }, [page])

    

    useEffect(() => {
        window.addEventListener('scroll',(e) => {
            const bottom = e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop === e.target.documentElement.clientHeight;
            // console.log(Math.round( e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop),e.target.documentElement.clientHeight);
             console.log(bottom);
            if (bottom){
              setPage(prev=>prev+1);
            }
          })
    }, []) 

    return (
        <div className='bg-galaxy'>
            <div className='uppercase fixed mt-14 cursor-default z-10 w-full text-center tracking-widest bg-black bg-opacity-80 font-thin  text-xl  pb-3' >
                    <p className='text-red-500 '>{name}</p>
            </div >
        <div className='  flex flex-wrap pt-20'>
           {movies.map((item)=><MovieItem  key={item.id} item={item} />)}

        </div>
        </div>
    )
}

export default Genre
