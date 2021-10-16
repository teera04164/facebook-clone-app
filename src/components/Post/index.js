import { useState } from 'react'
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button, Grid } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import ReplyIcon from '@material-ui/icons/Reply';

const Post = () => {
    const [ isLike, setLike] = useState(false)
    const history = useHistory();
    const [activeIcon, setActiveIcon] = useState('home')

    return <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <br/>
        <Paper style={{maxWidth: '680px', width: '100%'}}>
            <div className='post-header' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='user-info' style={{ display: 'flex', padding: '12px' }}>
                    <div className='user-img'>
                        <Avatar alt="Remy Sharp" src="icon/menu-mobile/profile.jpg" />
                    </div>
                    <div style={{ paddingLeft: '10px' }}>
                        <div className='user-name' style={{ fontWeight: 600 }}>หมอเฉพาะทางบาทเดียว</div>
                        <div className='post-time'>3 ชม.</div>
                    </div>
                </div>
                <div className='post-oprion'>
                    <Button>
                        <MoreHorizIcon />
                    </Button>
                </div>
            </div>
            <div className='post-title' style={{marginLeft: '12px'}}>
                ขำ คนตั้งราคา ..555
            </div>
            <div className='post-content'>
                <img width='100%' src='safe_image.jpg' alt='dd' />
            </div>
            <div className='post-active'>

            </div>
            <div className='line' />
            <div className='post-like'>
                <Grid container  justifyContent="center" alignItems="center">
                    <Grid item xs={4} >
                        <Button style={{width: '100%'}} onClick={() => setLike(prev => !prev)}>
                            <ThumbUpIcon style={{fill: `${isLike ? 'blue' : '#999999'}`}}/> &emsp; ถูกใจ
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button style={{width: '100%'}}>
                            <ModeCommentIcon style={{fill: '#999999'}}/>&emsp; แสดงความคิดเห็น
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button style={{width: '100%'}}>
                            <ReplyIcon style={{fill: '#999999'}}/>&emsp; แชร์
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </Paper>
    </div>
}

export default Post