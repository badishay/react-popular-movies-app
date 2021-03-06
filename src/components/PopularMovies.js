import React from 'react'
import MovieItem from './MovieItem'
import MyContext from './myContext'

// PopularMovies component
// holds the base to show the popular movies and search results

const PopularMovies = () => {
    return (<MyContext.Consumer>
        {
      context=>(
            <div className='bg-galaxy min-h-screen  ' >
                <div className='uppercase fixed mt-14 cursor-default z-10 w-full text-center tracking-widest bg-black bg-opacity-80 font-thin  text-xl  ' >
                    <p className='text-red-500 '>popular movies</p>
                </div >
                <div className='  flex flex-wrap justify-center pt-20 ' >
                    {context.items.map((item,index)=><MovieItem  key={item.id} item={item} id={index} />)}
                </div>
                <div className='h-16 font-thin py-3 tracking-widest bg-white bg-opacity-50 text-center text-white text-2xl z-20'>
               loading...
            </div>
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default PopularMovies

