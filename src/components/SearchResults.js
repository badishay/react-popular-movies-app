import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import MovieItem from './MovieItem'

function SearchResults() {
    const apiKey='fd2a4c25ac9eda692e330c4d102133e2';
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [header,setHeader] = useState('');
    const {searchText}= useParams();

    useEffect(async() => {
        const res= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&language=en-US&page=${page}`);
        await setMovies(prev=>[...prev,...res.data.results]);
    }, [page])

    useEffect(async() => {
        const res= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&language=en-US&page=${page}`);
        await setMovies([...res.data.results]);
        if(res.data.results.length){
            setHeader('search results for ');
          }
        else{
            setHeader('no results for ');
          }
        setPage(1);
    }, [searchText])
    
    useEffect(() => {
        window.addEventListener('scroll',(e) => {
            const bottom = Math.round(e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop) === e.target.documentElement.clientHeight;
            if (bottom){
              setPage(prev=>prev+1);
            }
          })
    }, []) 

    return (
            <div className='bg-galaxy min-h-screen' >
                <div className='uppercase fixed mt-14 cursor-default z-20 w-full text-center tracking-widest bg-black bg-opacity-80 font-thin  text-xl  ' >
                    <p className='text-gray-300'>{header}{<label className='text-red-500'>'{searchText.replace('+', ' ')}'</label>}</p>
                </div >
                <div className='flex flex-wrap justify-evenly pt-20 ' >
                    {movies.map((item,index)=><MovieItem  key={item.id} item={item} id={index} />)}
                </div>
        </div>

    )
}

export default SearchResults
