import { useState } from 'react'
import { useHistory } from "react-router-dom";

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

import Button from '@material-ui/core/Button';

import Tooltip from '@material-ui/core/Tooltip';

import { itemBtnCenter, itemMenu, itemBtnRight } from './constant'

const Navbar = () => {
    const history = useHistory();
    const [activeIcon, setActiveIcon] = useState('home')
    const [isAciveMenuMobile, setActiveMenuMobile] = useState(false)

    const handleClickMenu = (menu) => {
        setActiveIcon(menu)
        history.push(`/${menu === 'home' ? '' : menu}`)
    }

    const handleClickRightMenu = (menu) => {
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
                <div onClick={() => {
                    setActiveMenuMobile(prev => !prev)
                }}
                    className={`nav-center-mobile ${isAciveMenuMobile ? 'active' : ''}`}>
                    <MenuOutlinedIcon
                        fontSize='large'
                        className={isAciveMenuMobile ? 'active' : ''}
                    />
                </div>
            </div>

            <div className='nav-center'>
                <div className='center-icon'>
                    {
                        itemBtnCenter.map(item => {
                            const { key, label, IconBtn } = item
                            return <Tooltip title={label} arrow>
                                <Button
                                    className={isActiveMenu(key)}
                                    onClick={() => handleClickMenu(key)}
                                >
                                    <IconBtn  style={{ color: 'gray' }} fontSize='large' />
                                </Button>
                            </Tooltip>
                        })
                    }
                </div>
            </div>
            <div className='nav-right'>
                <div className="right-icon">
                    {
                        itemBtnRight.map(item => {
                            const { key, IconBtn, label } = item
                            return <Tooltip title={label} arrow>
                                <div className={`box-border ${isActiveRightMenu(key)}`}>
                                    <IconBtn
                                        onClick={() => handleClickRightMenu(key)}
                                    />
                                </div>
                            </Tooltip>
                        })
                    }
                </div>

            </div>
        </div>
        {
            isAciveMenuMobile &&
            <div className="list-menu-mobile">
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