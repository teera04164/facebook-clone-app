import HomeIcon from '@material-ui/icons/HomeOutlined';
import MovieIcon from '@material-ui/icons/MovieOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import SportsEsportsIcon from '@material-ui/icons/SportsEsportsOutlined';
import LocalMallIcon from '@material-ui/icons/LocalMallOutlined';

import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDownOutlined';

export const itemMenu = [
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

export const itemBtnCenter = [
    {
        key: 'home',
        label: 'หน้าหลัก',
        IconBtn: HomeIcon
    },
    {
        key: 'watch',
        label: 'Watch',
        IconBtn: MovieIcon
    },
    {
        key: 'marketplace',
        label: 'Marketplace',
        IconBtn: LocalMallIcon
    },
    {
        key: 'group',
        label: 'กลุ่ม',
        IconBtn: PeopleIcon
    },
    {
        key: 'game',
        label: 'การเล่นเกม',
        IconBtn: SportsEsportsIcon
    },
]

export const itemBtnRight = [
    {
        key: 'chat',
        label: 'messenger',
        IconBtn: TelegramIcon
    },
    {
        key: 'notification',
        label: 'การแข้งเตือน',
        IconBtn: NotificationsIcon
    },
    {
        key: 'arrow',
        label: 'บัญชี',
        IconBtn: ArrowDropDownIcon
    },
]