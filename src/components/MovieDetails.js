import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function MovieDetails() {
    const [movie,setMovie]= useState({});
    const [cast,setCast]= useState([]);
    const [genres,setGenres]= useState([]);
    const [year,setYear]= useState('');
    const [trailerKey,setTrailerKey]= useState('');
    const {id}= useParams()
    const apiKey='fd2a4c25ac9eda692e330c4d102133e2'
    
    useEffect(async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        setMovie(res.data);
        setYear(res.data.release_date.slice(0,4));
        setGenres(res.data.genres)

    }, [])

    useEffect(async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`);
        setCast(res.data.cast.slice(0,5))
    }, [])

    useEffect(async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`);
        if(res.data.results[0]){
            setTrailerKey(res.data.results[0].key)
        }
        console.log(trailerKey);
    }, [])

    return (
<div className=' h-full flex flex-col' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  
  }}>
      <div className='bg-gray-500 bg-opacity-70'>
          {/* <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className=' opacity-50 p-0  '  alt='movie'> */}
              <div className=' text-gray-900  flex flex-row '  >
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=' w-1/5 h-full m-10 mt-10 shadow-2xl '   alt='movie'/>
                <div className='mt-10 bg-gradient-to-r from-gray-200 via-gray-300 to-transperent hover:from-gray-100 hover:via-gray-200 bg-opacity-10 hover:bg-opacity-40  p-7 w-2/5 h-1/2'>
                    <p className='text-4xl text-gray-900 font-extrabold font-sans mb-2 '> {movie.title} <p className='font-normal text-2xl'>{year}</p></p>
                    <div class="flex flex-warp divide-x-2 divide-black ml-0  divide-opacity-40  mb-10 ">
                        {genres.map(genre=><div className=' px-3 font-bold'>{genre.name}</div>)}
                    </div>
                    {movie.overview?<p className='h-auto  tracking-wide font-semibold text-sm'><header className='font-bold mb-2 text-2xl'>overview</header> {movie.overview}</p>:null}
                    
                {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className='opacity-30 w-3/4 '  alt='movie'/> */}
                </div>
                {/* <iframe src={`https://youtu.be/${trailerKey}`}/> */}
                {trailerKey?
                    <iframe className='my-10 ml-10 mr-0 opacity-60 rounded w-80 h-64 hover:opacity-100 hover:scale-150 hover:-translate-x-32 hover:translate-y-10 delay-150 duration-300 transform  '   src={`https://www.youtube.com/embed/${trailerKey}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    :null}
            </div >
            <div className=' flex  bg-gray-900 bg-opacity-50 '>
                {/* <div className='font-mono font-bold italic text-white shadow-2xl text-3xl'>Actors</div> */}
                   {cast.map(actor=> actor.profile_path?
                  ( <span className='flex-none w-1/12 m-5 opacity-70 text-transparent hover:text-gray-200 text-sm'>
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}  className=' opacity-70  mx-3 hover:opacity-95  rounded-lg shadow-2xl'   alt='actor'/>
                         <p className='ml-3'>{actor.name}</p>
                    </span>)
                        :null)}
            </div>
            
                   </div>
            {/* </Image> */}
                </div>
          
    )
}

export default MovieDetails
