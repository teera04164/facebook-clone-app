import { useState } from 'react'
import { useHistory } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Post from '../../components/Post';

const Home = () => {
    const history = useHistory();
    const [activeIcon, setActiveIcon] = useState('home')

    return <>
        <Grid container style={{backgroundColor: '#e7e7e7'}}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </Grid>
            <Grid item xs={3}>
            </Grid>
          
        </Grid>
    </>
}

export default Home