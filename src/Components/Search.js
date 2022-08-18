import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import {GoogleInput} from './GoogleInput';
import { GoogleButtons } from './GoogleButtons';
import "./Search.css"
import { setTextString } from '../features/textSlice';
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';

const Search = ({hideButtons = false}) => {
  const [input, setInput]=useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const search = (e)=> {
    e.preventDefault();
    dispatch(setTextString(input));
    navigate(`/search`);

    }
  return (
    <>
        <form className='search'>
            <GoogleInput>
            <SearchIcon className='search__inputIcon'/>
            <input value={input} onChange={e=>setInput(e.target.value)}/>
            <MicIcon/>
            </GoogleInput>
            <div className='search__buttons'>
              <GoogleButtons type='submit' onClick={search} className={hideButtons ? "search__hideButtons" : ""}>Buscar con Google</GoogleButtons>
              <GoogleButtons className={hideButtons ? "search__hideButtons" : ""}>Voy a tener suerte</GoogleButtons>
            </div>
        </form>
    </>
  )
}

export default Search