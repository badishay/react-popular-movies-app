import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Searchbar() {
    const [inputFiled, setInputFiled] = useState('');
    let history=useHistory();
    const showResults=()=>{
        history.push(`/search-results/${inputFiled.replace(' ','+')}`)
        setInputFiled('')
    }
    return (
        
        <div className='bg-white h-10 rounded-l-full border-2 border-r-0 border-gray-500'>
            {inputFiled?<input type='button' value='X'  
                className=' border-gray-400 border-2 absolute text-center  text-sm border-rounded ml-2  my-2 cursor-pointer focus:outline-none  px-1  font-bold bg-opacity-50 text-gray-400  bg-white rounded-full opacity-70' 
            onClick={()=>{
                setInputFiled('');
            }
                }/>: null}
            <input type="text" value={inputFiled} 
                className='bg-transperent w-full bg-transparent ml-6 pl-4 pt-1 mr-2  text-lg font-semibold   focus:outline-none focus:placeholder-gray-300 placeholder-gray-400  ' placeholder='search for movies' 
            onChange={e=>{
                setInputFiled(e.target.value)
            }}
            onKeyDown={(e)=>{
                if(inputFiled&&inputFiled!==" "){
                    e.key==='Enter' && showResults()
                }
            }
           }/> 
                    
        </div>
       
    )
}

export default Searchbar
