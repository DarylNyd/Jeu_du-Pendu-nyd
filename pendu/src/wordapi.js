import { useEffect, useState } from "react";
import Button from "./components/Button";
export function CallWord() {
    const [motdev, setMotdev] = useState("");
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

    function handlelick(Mot){
        setMotdev(Mot);

    }

    if (!words) {
        return <p>Just Wait a minute</p>;
    }
    return (
        <div>
            <p>{words.data.word}</p>

            <Button value={'Change word'} onclick={() => fetch()}/>
        </div>
    );
    }

    export default CallWord;