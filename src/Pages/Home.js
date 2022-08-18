import AppsIcon from '@mui/icons-material/Apps';
import {Avatar, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import Search from '../Components/Search';
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
        <div className="home__header">
            <div className="home__headerLeft">
                <Link to="/about"></Link>
                <Link to="/store"></Link>
            </div>
            <div className="home__headerRight">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Imagenes</Link>
                <IconButton>
                <AppsIcon />
                </IconButton>                
                <Avatar />
            </div>
        </div>
        <div className="home__body">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
            <Search />
        </div>
    </div>
  )
}

export default Home