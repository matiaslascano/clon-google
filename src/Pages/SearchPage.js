import { Link } from "react-router-dom";
import Search from "../Components/Search";
import "./SearchPage.css";
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from "@mui/material";
import { selectTextString } from "../features/textSlice";
import { useSelector } from "react-redux";
import useGoogleSearch from "../useGoogleSearch";
import Results from "../Components/Results";

const SearchPage = () => {
  const textString = useSelector(selectTextString);
  const {data} = useGoogleSearch(textString);
  console.log(data);


  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPageLogo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
        </Link>
      
      <div className="searchPage__headerCenter">
        <Search hideButtons/>
        <div className="searchPage__options">
          <div className="searchPage__optionLeft">
            <div className="searchPage__option">
              <SearchIcon fontSize="small"/>
              <Link to="/all">Todo</Link>
            </div>
            <div className="searchPage__option">
              <NewspaperIcon fontSize="small"/>
              <Link to="/news">Noticias</Link>
            </div>
            <div className="searchPage__option">
              <ImageSearchIcon fontSize="small"/>
              <Link to="/images">Imagenes</Link>
            </div>
            <div className="searchPage__option">
              <ShoppingCartIcon fontSize="small"/>
              <Link to="/shopping">Compras</Link>
            </div>
            <div className="searchPage__option">
              <LocationOnIcon fontSize="small"/>
              <Link to="/maps">Mapas</Link>
            </div>
            <div className="searchPage__option">
              <MoreVertIcon fontSize="small"/>
              <Link to="/more">Mas...</Link>
            </div>
            
          </div>
          <div className="searchPage__optionRight">
            <div className="searchPage__option">
              <Link to="/settings">Configuración</Link>
            </div>
            <div className="searchPage__option">
              <Link to="/tools">Herramientas</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage__headerRight">
        <AppsIcon fontSize="large"/>
        <Avatar className="headerRight__avatar"/>
      </div>
      </div>
      {textString &&
        <div className="searchPage__results">
          <p className="searchPage__resultsCount">
            Cerca de {data?.searchInformation.formattedTotalResults} resultados ({data?.searchInformation.formattedSearchTime} segundos)
          </p> 
          {
        data?.items.map(item=>(
          <Results key={item.cacheId} data={item}/>
        )) 
      }         
        </div>
        
      }
      
    </div>
  )
}

export default SearchPage