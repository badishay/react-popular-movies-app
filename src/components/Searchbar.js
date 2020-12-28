import React, {useState} from 'react'
import MyContext from './myContext'

function Searchbar(props) {
    const [inputFiled, setInputFiled] = useState('')
    return (
        <MyContext.Consumer>
              {
            context=>(
        <div className=' rounded-l-full w-1/3  bg-gradient-to-r from-white via-white to-transparent border-0 border-r-0 border-gray-900 border-opacity-60 py-2  '>
            {inputFiled?<input type='button' value='X'  className={'text-sm border-gray-400 focus:outline-none border-2 font-bold bg-opacity-50 text-gray-400 object-left bg-white rounded-full px-2 mr-2 opacity-70'} 
            onClick={()=>{
                context.restart();
                setInputFiled('')
            }
                }/>: null}
            <input type="text" className='bg-transperent rounded-xl bg-transparent m-0  text-2xl font-semibold w-max  focus:outline-none focus:placeholder-gray-300 placeholder-gray-400 ' placeholder='search for movies' value={inputFiled} onChange={e=>setInputFiled(e.target.value)} onKeyDown={e=>e.key==='Enter'?context.callback(inputFiled):null}/>
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Searchbar
