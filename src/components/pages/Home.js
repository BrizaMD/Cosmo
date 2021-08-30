import React from 'react';
import fortuneCookie from '../../static/img/fortunecookie1.png';
import brokenFortuneCookie from '../../static/img/fortunecookie2.png';
import fetcher from "../../utility/Fetch";


const Home = () => {
    const url = 'https://api.adviceslip.com/advice';

    const placeHolder = () => {
        console.log(fetcher(url));
    }

    return(
        <div id={"fortune"}>
            <img src={fortuneCookie} alt="fortune cookie" onClick={placeHolder}/>
            <img src={brokenFortuneCookie} alt="broken fortune cookie" />
        </div>
    )
}

export default Home;