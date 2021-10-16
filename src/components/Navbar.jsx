import { useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';

import HomeIcon from '@material-ui/icons/HomeOutlined';
import MovieIcon from '@material-ui/icons/MovieOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import SportsEsportsIcon from '@material-ui/icons/SportsEsportsOutlined';
import LocalMallIcon from '@material-ui/icons/LocalMallOutlined';

import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDownOutlined';

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';


const itemMenu = [
    {
        img: 'icon/menu-mobile/profile.jpg',
        label: 'Teerapong Sitthikarn'
    },
    {
        img: 'icon/menu-mobile/friend.png',
        label: 'เพื่อน'
    },
    {
        img: 'icon/menu-mobile/group.png',
        label: 'กลุ่ม'
    },
    {
        img: 'icon/menu-mobile/market.png',
        label: 'Marketplace'
    },
    {
        img: 'icon/menu-mobile/watch.png',
        label: 'Watch'
    },
    {
        img: 'icon/menu-mobile/remember.png',
        label: 'ความทรงจำ'
    },
]
const Navbar = () => {
    const [activeIcon, setActiveIcon] = useState('home')
    const [isAciveMenuMobile, setActiveMenuMobile] = useState(false)

    const handleClickMenu = (menu) => {
        setActiveIcon(menu)

    }

    const isActiveMenu = (menu) => {
        return menu === activeIcon ? 'active' : ''
    }

    const isActiveRightMenu = (menu) => {
        return menu === activeIcon ? 'active-right' : ''
    }
    return <>
        <div className='nav-bar'>
            <div className='nav-left'>
                <div className="logo-fb">
                    <img src="icon/fb.png" alt="icon face" />
                </div>
                <div className={`nav-center-mobile ${isAciveMenuMobile ? 'active' : ''}`}>
                    <MenuOutlinedIcon
                        fontSize='large'
                        onClick={() => {
                            setActiveMenuMobile(prev => !prev)
                            // handleClickMenu('menu-mobile')
                        }}
                        className={isAciveMenuMobile ? 'active' : ''}
                    />
                </div>
            </div>
            <div className='nav-center'>
                <div className='center-icon'>
                    <HomeIcon
                        fontSize='large'
                        onClick={() => handleClickMenu('home')}
                        className={isActiveMenu('home')}
                    />
                    <MovieIcon
                        fontSize='large'
                        onClick={() => handleClickMenu('movie')}
                        className={isActiveMenu('movie')}
                    />
                    <LocalMallIcon
                        fontSize='large'
                        onClick={() => handleClickMenu('mall')}
                        className={isActiveMenu('mall')}
                    />
                    <PeopleIcon
                        fontSize='large'
                        onClick={() => handleClickMenu('group')}
                        className={isActiveMenu('group')}
                    />
                    <SportsEsportsIcon
                        fontSize='large'
                        onClick={() => handleClickMenu('game')}
                        className={isActiveMenu('game')}
                    />
                </div>
            </div>
            <div className='nav-right'>
                <div className="right-icon">
                    <div className={`box-border ${isActiveRightMenu('char')}`}>
                        <TelegramIcon
                            onClick={() => handleClickMenu('char')}
                        // className={isActiveRightMenu('char')}
                        />
                    </div>
                    <div className={`box-border ${isActiveRightMenu('noti')}`}>
                        <NotificationsIcon
                            onClick={() => handleClickMenu('noti')}
                        // className={isActiveRightMenu('noti')}
                        />
                    </div>
                    <div className={`box-border ${isActiveRightMenu('arrow')}`}>
                        <ArrowDropDownIcon
                            onClick={() => handleClickMenu('arrow')}
                        // className={isActiveRightMenu('arrow')}
                        />
                    </div>
                </div>

            </div>
        </div>
        {
            isAciveMenuMobile &&
            <div className="list-menu-mobile" style={{ backgroundColor: 'white', height: 'calc(100% - 66px)', paddingTop: '66px' }}>
                <ul className='menu-mobile-main'>
                    {
                        itemMenu.map(item => {
                            const { img, label } = item
                            return <li className='menu-mobile-item'>
                                <img src={img} alt="xxx" />
                                <span>{label}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        }

    </>
}

export default Navbar