import React, {useState} from 'react'
import MyContext from './myContext'

function Searchbar(props) {
    const [inputFiled, setInputFiled] = useState('')
    return (
        <MyContext.Consumer>
              {
            context=>(
                <div className=' relative h-12 p-0 '>
        <div className='  bg-white h-10 rounded-l-full pb-2 w-1/3 absolute inset-y-0 right-0  border-2 border-r-0 border-gray-500'>
            {inputFiled?<input type='button' value='X'  className=' border-gray-400 border-2 absolute text-center  text-sm border-rounded ml-2  mt-2 cursor-pointer focus:outline-none  px-1  font-bold bg-opacity-50 text-gray-400  bg-white rounded-full opacity-70' 
            onClick={()=>{
                context.restart();
                setInputFiled('')
            }
                }/>: null}
            <input type="text" className='bg-transperent w-full bg-transparent ml-6 pl-4 pt-1 mr-2  text-xl font-semibold   focus:outline-none focus:placeholder-gray-300 placeholder-gray-400  ' placeholder='search for movies' value={inputFiled} onChange={e=>setInputFiled(e.target.value)} onKeyDown={e=>e.key==='Enter'?context.callback(inputFiled):null}/>
        </div>
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Searchbar
