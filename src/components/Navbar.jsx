import { useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const Navbar = () => {



    return <>
        <div className='nav-bar'>
            <div className='nav-left'>
                <FacebookIcon />
                <MovieIcon />
                <MonetizationOnIcon />
                <SportsEsportsIcon />
            </div>
            <div className='nav-center'></div>
            <div className='nav-right'></div>
        </div>
    </>
}

export default Navbar