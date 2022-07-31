import { Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';
import PrivateRoute from '../../utils/hocs/PrivateRoute';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from 'firebase/auth';

const CreatePage = () => {

    const [value,setValue] = useState('')
    const auth = getAuth()
    console.log(auth)

    const handleChange = (ev:any) => {
        setValue(ev.target.value)
    }

    const submitData = () => {
        const db = getDatabase()
        
        set(ref(db,'users/'+auth.currentUser?.uid),{
            text:value
        })
    }

    return(
        <div>
            <TextareaAutosize
                aria-label='Empty textarea'
                placeholder='Type your Good2Know'
                style={{width:'50%',height:'500px'}}
                value={value}
                onChange={handleChange}
            />
            <Button onClick={submitData}>Publish</Button>
        </div>
    )
}


export default CreatePage