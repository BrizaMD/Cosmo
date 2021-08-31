import React, {useState} from 'react';
import cookie from '../../static/img/003-fortune-cookie-2.png';
import axios from "axios";
import '../../App.css'
import video from "../../static/video/Pexels Videos 1795797.mp4";
import styled from "styled-components";


const Home = () => {
    const url = 'https://api.adviceslip.com/advice';
    let advice = {};
    const [isAdvice, setAdviceState] = useState(false);

    // const getAdvice = async () => {
    //     data = fetcher(url);
    //     console.log(data);
    // }

    const getAdvice = async () => {
        await axios.get(url)
            .then(async res => {
                advice = await res.data.slip;
                setAdviceState(!isAdvice);
            })

    }
    return (
        <>
            <BackgroundContainer>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </BackgroundContainer>

            <FortuneCookie>

                <img src={cookie} alt="fortune cookie" onClick={getAdvice}/>
                <h1 onClick={getAdvice}> Click </h1>
            </FortuneCookie>

        </>
    )
}
//
// {
//     isAdvice ?
//         <Advice>
//             {advice.map((item) => (
//                 <p>{item.advice}</p>
//             ))}
//         </Advice>
//         :
//         <Advice></Advice>
// }

export default Home;

const Advice = styled.div`
  border: 1px solid black;
  max-width: 550px;
  position: absolute;
  top: 40vh;
  right: 35vw;
  transform: translate(-50%, -50%);
  //scaleX(-1)
  margin: auto;
  align-items: center;
  text-align: center;
  font-size: 80px;
`;

const FortuneCookie = styled.div`
  border: 1px solid transparent;
  max-width: 550px;
  position: absolute;
  top: 70vh;
  right: 10vw;
  transform: translate(-50%, -50%);
  //scaleX(-1)
  margin: auto;
  align-items: center;
  text-align: center;

  img {
    width: 100px;
    cursor: pointer;
  }

  h1 {
    cursor: pointer;
    color: white;
    font-size: 20px;
  }
    // background-image: url(${cookie}) ;
  // background-size: contain;
  // background-repeat: no-repeat;
  // width: 150px;
  // height: 300px;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  opacity: 0.8;
  z-index: -1;
  position: relative;

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

`;
