import { getAuth } from "firebase/auth"
import { getDatabase, ref, onValue } from "firebase/database"
import { useEffect, useState } from "react";

const ListPage = () => {

    const [text,setText] = useState();

    useEffect(() => {
        const auth = getAuth()
        const db = getDatabase()
        const starCountRef = ref(db, 'users/' + auth.currentUser?.uid);
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setText(data.text);
        });
    },[])

    return(
        <div>{text}</div>
    )
}

export default ListPage