import React from 'react'
import { useHistory} from 'react-router-dom'
import MyContext from './myContext'
import Searchbar from './Searchbar'

const Navbar = (props) => {

    let history=useHistory()
    return (
        <MyContext.Consumer>
        {
      context=>(
        <div className=' py-3  bg-black w-full z-20 fixed '>
            <div onClick={
                ()=>{
                context.restart()
                history.push('/')
            }
                }><p className=' text-red-900   to-red-200 border-solid  border-2 border-red-900 hover:text-red-600 hover:border-red-600  border-l-0  text-left  p-1 bg-red-100 rounded-r-full w-24 italic font-extrabold text-sm font-sans  cursor-pointer'>home page</p>
                </div>
                {<Searchbar/>}
           
            
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Navbar
