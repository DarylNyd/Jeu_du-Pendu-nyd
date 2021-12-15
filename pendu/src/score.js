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
            <p>{score.data.map(user => <div className="score"><table>
                <th><td><img src={user.avatar} /></td>
                    <td> {user.username}</td> 
                    <td>{user.score}</td>
                </th></table></div>)}</p>
            <p>{score.data[0].username}</p>
            <p>{score.data[0].score}</p>
            <p><img src={score.data[0].avatar} /></p>
        </div>
    );
    }
    
export default CallApi;