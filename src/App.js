import './App.css';
import {Switch, Route} from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import PopularMovies from './components/PopularMovies'
import SearchResults from './components/SearchResults'
import MovieDetails from './components/MovieDetails'
import MyContext from './components/myContext'
import ActorDetails from'./components/ActorDetails'
import Genre from './components/Genre'
import axios from 'axios'


function App() {
  const [items,setItems] =useState([]);
  const [page,setPage] = useState(1);
  
  useEffect(async() => {
      const apiKey='fd2a4c25ac9eda692e330c4d102133e2'
      const popular= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);
        if(page===1){//if the page restart to 1 because we return fron search
          setItems([...popular.data.results])
        }
        else{
          setItems(oldItems => [...oldItems,...popular.data.results])
        }
          }, [page])
  
  useEffect(() => {
    window.addEventListener('scroll',(e) => {
      const bottom = Math.round(e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop) === e.target.documentElement.clientHeight;
        if (bottom){
          setPage(prev=>prev+1);
        }
      })
}, []) 
  
  return (
      <MyContext.Provider value={{
        restart:()=>{
           setPage(1)
          },
        items: items,
        page:page,
        morePage:()=>setPage(prev=>prev+1)}}>
    <div>
     <Navbar />
     <Switch  style={{width:'100vw', height:'100%'}} >

          <Route exact path='/'>
            <PopularMovies/> 
          </Route>

          <Route  path='/search-results/:searchText' >
              <SearchResults/>
          </Route>

          <Route  path='/movies/:id' >
              <MovieDetails/>
          </Route>

          <Route  path='/actors/:id' >
              <ActorDetails/>
          </Route>

          <Route  path='/genre/:id/:name' >
              <Genre/>
          </Route>

          <Route path='*' >
              <p className='text-4xl text-center text-red-900  pt-32 font-thin tracking-wide'>
                page not found :(
              </p>
          </Route>

        </Switch>
    </div>
    </MyContext.Provider>

  );
}

export default App;