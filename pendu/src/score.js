import { useEffect, useState } from "react";
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
        <div>
            <p>{score.data.map(user => <div><p>{user.username}</p> <p>{user.score}</p> <p><img src={user.avatar} /></p></div>)}</p>
            <p>{score.data[0].username}</p>
            <p>{score.data[0].score}</p>
            <p><img src={score.data[0].avatar} /></p>
        </div>
    );
    }
    
export default CallApi;