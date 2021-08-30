import React from 'react';
import fortuneCookie from '../../static/img/fortunecookie1.png';
import brokenFortuneCookie from '../../static/img/fortunecookie2.png';
import axios from "axios";
import '../../App.css'


const Home = () => {
    const url = 'https://api.adviceslip.com/advice';
    let advice = {};

    // const getAdvice = async () => {
    //     data = fetcher(url);
    //     console.log(data);
    // }

    const getAdvice = async () => {
        await axios.get(url)
            .then(async res =>{
                advice = await res.data.slip.advice;
            })
        console.log(advice);
    }

    return(
        <div id={"fortune"}>
            <img src={fortuneCookie} alt="fortune cookie" onClick={getAdvice}/>
            <img src={brokenFortuneCookie} alt="broken fortune cookie" />
        </div>
    )
}

export default Home;