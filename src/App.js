import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import PopularMovies from './components/PopularMovies'
import MovieDetails from './components/MovieDetails'
import MyContext from './components/myContext'

import axios from 'axios'
function App() {
  const [searchText,setSearchText] = useState('');
  const [items,setItems] =useState([]);
  const [page,setPage] = useState(1);
  const [header,setHeader] = useState('popular movies');
 
  let history=useHistory()
  
  useEffect(async() => {
      const apiKey='fd2a4c25ac9eda692e330c4d102133e2'
      const popular= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);
      if(searchText){
        setPage(1);
        const find= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText.replace(' ','+')}&language=en-US`);
        setItems([...find.data.results]);
        console.log(find.data.results);
        if(find.data.results.length){
          setHeader('search results');
        }
        else{
          setHeader('no results :(');
        }
    }
    else{
      if(page===1){//if the page restart to 1 because we return fron search
        setItems([...popular.data.results])
      }
      else{
        setItems(oldItems => [...oldItems,...popular.data.results])
      }
      setHeader('popular movies');

    }
          }, [searchText,page])
  


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
    
      <MyContext.Provider value={{
        text:searchText, 
        callback:(text)=>{
          history.push('./')
          setSearchText(text)},
        restart:()=>{
           setPage(1)
          setSearchText('');
          },
        items: items,
        header:header,
        page:page,
        morePage:()=>setPage(prev=>prev+1)}}>
    <div>
     <Navbar />

     <Switch  style={{width:'100%', height:'100%'}} >
          <Route  path='/movies/:id' >
              <MovieDetails/>
          </Route>

          {/* <Route  path='/movies/search' >
              <SearchResults/>
          </Route> */}
          
          <Route path='/'>
            <PopularMovies text={searchText}/> 
          </Route>
        
        </Switch>
    </div>
    </MyContext.Provider>

  );
}

export default App;