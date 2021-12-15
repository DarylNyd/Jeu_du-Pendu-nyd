import { useEffect, useState } from "react";
export function CallWord() {
    const [words, setData] = useState(undefined);
    useEffect(() => {
        (async () => {
            const newData = await getData();
            setData(newData);
        })();
        return () => {};
    }, []);

    const getData = async () =>{
        const dataJson = await fetch("https://animalfinderapi.herokuapp.com/word");
        return await dataJson.json();
    };

    if (!words) {
        return <p>Just Wait a minute</p>;
    }
    return (
        <div>
            <p>{words.data.word}</p>
        </div>
    );
    }

    export default CallWord;