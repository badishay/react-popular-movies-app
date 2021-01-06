import React, {useState,useEffect} from 'react'
import MovieItem from './MovieItem'
import MyContext from './myContext'

// PopularMovies component
// holds the base to show the popular movies and search results

const PopularMovies = (props) => {
   
  
    
    
    return (<MyContext.Consumer>
        {
      context=>(
        
            <div className='bg-galaxy min-h-screen  ' >
                <div className='uppercase fixed mt-14 cursor-default z-10 w-full text-center tracking-widest bg-black bg-opacity-80 font-thin  text-xl  ' >
                    <p className='text-red-500 '>{context.header}</p>
                </div >
                <div className='  flex flex-wrap justify-evenly  pt-20 ' >
                    {context.items.map((item,index)=><MovieItem  key={item.id} item={item} id={index} />)}
                </div>
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default PopularMovies


