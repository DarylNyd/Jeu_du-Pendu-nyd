import { useEffect, useState } from "react";
import Button from "./components/Button";
export function CallWord() {
    const [motdev, setMotdev] = useState("");
    const [what, setWhat] = useState("");
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

    /*function handlelick(Mot){
        setMotdev(Mot);
        let hide = hideMot(Mot);
    }
   function hideMot(counted) {
        let hide = '';
        for(let i=0; i < Mot.length; i++){
            hide += '_'
        }
        return hide;
    }
    function niceWhat(){
        let out = "";
        for(let i = 0; i < guessed.lenght; i++){
            out += ` ${}`
        }
    }*/
 function refresh(){
     window.location.reload();
 }
    if (!words) {
        return <p>Just Wait a minute</p>;
    }
    return (
        <div>
            <p>{words.data.word}</p>

            <Button value={'Change word'} onclick={() => refresh()}/>
        </div>
    );
    }

    export default CallWord;