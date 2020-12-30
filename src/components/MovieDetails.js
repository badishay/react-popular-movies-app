import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function MovieDetails() {
    const [movie,setMovie]= useState({});
    const [cast,setCast]= useState([]);
    const [genres,setGenres]= useState([]);
    const [year,setYear]= useState('');
    const [trailerKey,setTrailerKey]= useState('');
    const [showTrailer,setShowTrailer]= useState(false);
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

    const trailer= (<iframe className='rounded-tl-3xl'  src={`https://www.youtube.com/embed/${trailerKey}`} frameborder="0" width='100%' height='100%' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
        

    return (
<div className='' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  
  }}>
      <div className='bg-gray-500 bg-opacity-70 pt-16 cursor-default '>
          {/* <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className=' opacity-50 p-0  '  alt='movie'> */}
              <div className=' text-gray-900 flex flex-warp '  >
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=' w-1/5 h-full m-10 mt-10 shadow-2xl '   alt='movie'/>
      {showTrailer? (<div className='w-screen h-screen bg-black bg-opacity-80 z-10 fixed'>
                <div className=' inset-0 h-4/5 my-10  focus:outline-none'>
                    <input type='button' className=' border-4 cursor-pointer bg-black bg-opacity-70 focus:outline-none absolute text-red-500 border-red-500 font-bold hover:text-red-400 hover:border-red-400  text-xl rounded-full px-3 pb-1 p-1 text-center pt-0 ' value='x' onClick={()=>setShowTrailer(false)}/>
                    {trailer}
                    </div>
                    </div>)
                    :null}
                      
                <div className='mt-10 bg-gradient-to-r from-gray-200 via-gray-300 h-3/4 to-transperent hover:from-gray-100 hover:via-gray-200 bg-opacity-10 hover:bg-opacity-40  p-7 w-2/3 '>
                    <p className='text-4xl text-gray-900 font-extrabold font-sans mb-2 '> {movie.title} <p className='font-semibold text-2xl'>{year}</p></p>
                    <div class="flex flex-warp divide-x-2 divide-black  w-3/4 -ml-3  divide-opacity-40  mb-10 ">
                        {genres.map(genre=><div className=' px-3 font-bold'>{genre.name}</div>)}
                    </div>
                    {trailerKey?
                     <input type='button' value='trailer >' className='px-2 mb-5 rounded-full font-bold text-yellow-50 bg-red-700 pb-1 cursor-pointer hover:bg-red-600 text-center focus:outline-none' onClick={()=>setShowTrailer(true)}/>
                     :null}
                    {movie.overview?<p className='h-auto tracking-wide font-semibold text-sm'><header className='font-bold mb-2 text-2xl'>overview</header> {movie.overview}</p>:null}
                </div>
                
            </div >
            <div className='bg-gray-900 bg-opacity-50 mt-4'>
                <p className=' bg-black bg-opacity-40 p-2 px-5 text-gray-400 font text-3xl italic font-bold'>cast</p>
                {/* <div className='font-mono font-bold italic text-white shadow-2xl text-3xl'>Actors</div> */}

                   <div className='flex'>{cast.map(actor=> actor.profile_path?
                  ( <span className='flex-none w-1/12 mx-3 mt-2 mb-5 opacity-70 text-transparent hover:text-gray-200 text-sm'>
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}  className=' opacity-70  hover:opacity-95  rounded shadow-2xl'   alt='actor'/>
                         <p className='ml-3'>{actor.name}</p>
                    </span>)
                        :null)}</div>
            </div>
            
                   </div>
            {/* </Image> */}
                </div>
          
    )
}

export default MovieDetails
