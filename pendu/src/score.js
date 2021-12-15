import { useEffect, useState } from "react";
import './score.css'
export function CallApi () {
    const [ score, setdata] = useState(undefined);
    useEffect(() => {
        (async () => {
            const newData = await getData();
            setdata(newData);
        })();
        return () => {};
    }, []);

    const getData = async () => {
        const dataJson = await fetch("https://animalfinderapi.herokuapp.com/score");
        return await dataJson.json();
    };

    if (!score) {
        return <p>waiting</p>;
    }
    return (
        <div className="score1">
            <p>{score.data.map(user => <div className="card"><p><img src={user.avatar} /> <p>{user.username}</p> <p>{user.score}</p> </p></div>)}</p>
            <p>{score.data[0].username}</p>
            <p>{score.data[0].score}</p>
            <p><img src={score.data[0].avatar} /></p>
        </div>
    );
    }
    
export default CallApi;