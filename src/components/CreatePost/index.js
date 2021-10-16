import { useState } from 'react'
import { useHistory } from "react-router-dom";


const CreatePost = () => {
    const history = useHistory();
    const [activeIcon, setActiveIcon] = useState('home')

    return <>
        <h1>
            CreatePost
        </h1>
    </>
}

export default CreatePost