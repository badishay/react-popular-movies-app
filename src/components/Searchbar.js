import React, {useState} from 'react'
import MyContext from './myContext'

function Searchbar(props) {
    const [inputFiled, setInputFiled] = useState('')
    return (
        <MyContext.Consumer>
              {
            context=>(
        <div className='  bg-white h-10 rounded-l-full pb-2'>
            {inputFiled?<input type='button' value='X'  className=' border-gray-400 border-2 text-sm border-rounded ml-3 cursor-pointer focus:outline-none  px-1  font-bold bg-opacity-50 text-gray-400  bg-white rounded-full opacity-70' 
            onClick={()=>{
                context.restart();
                setInputFiled('')
            }
                }/>: null}
            <input type="text" className='bg-transperent rounded-xl bg-transparent m-0 pl-4 pt-1  text-2xl font-semibold w-max  focus:outline-none focus:placeholder-gray-300 placeholder-gray-400 ' placeholder='search for movies' value={inputFiled} onChange={e=>setInputFiled(e.target.value)} onKeyDown={e=>e.key==='Enter'?context.callback(inputFiled):null}/>
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Searchbar
