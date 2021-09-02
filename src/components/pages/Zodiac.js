import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import video1 from "../../static/video/aurora.mp4";
import video from "../../static/video/mandala.mp4";
import ThemeContext from "../../context/ThemeProvider";

const Zodiac = () => {
    const zodiacs = ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn'];
    const [chosenZodiac, setChosenZodiac] = useState('aquarius');
    const [zodiac, setZodiac] = useState({
        name: '',
        data_range: '',
        current_date: '',
        description: '',
        compatibility: '',
        mood: '',
        color: '',
        lucky_number: '',
        lucky_time: ''
    })

    const { isOriginal } = useContext(ThemeContext);

    useEffect((chosenZodiac) => {
        axios.post('https://aztro.sameerkumar.website/?sign=aquarius&day=today')
            .then( async res => {
                await setZodiac({
                    name: chosenZodiac,
                    data_range: res.data.data_range,
                    current_date: res.data.current_date,
                    description: res.data.description,
                    compatibility: res.data.compatibility,
                    mood: res.data.mood,
                    color: res.data.color,
                    lucky_number: res.data.lucky_number,
                    lucky_time: res.data.lucky_time
                })
            })
    }, [])


    const handleClick = async function (sign) {
        setChosenZodiac(sign);
        await axios.post('https://aztro.sameerkumar.website/?sign='+sign+'&day=today')
            .then( async res => {
                await setZodiac({
                    name: sign,
                    data_range: res.data.data_range,
                    current_date: res.data.current_date,
                    description: res.data.description,
                    compatibility: res.data.compatibility,
                    mood: res.data.mood,
                    color: res.data.color,
                    lucky_number: res.data.lucky_number,
                    lucky_time: res.data.lucky_time
                })
            })
    }

    return(
        <ZodiacPage className={isOriginal ? 'original-zodiac' : 'secondary-zodiac'}>
            <BackgroundContainer data-testid="background-video">
                <video hidden={isOriginal} autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>

                <video hidden={!isOriginal} autoPlay loop muted>
                    <source src={video1} type="video/mp4"/>
                </video>
            </BackgroundContainer>
            <SignContainer data-testid='signs' className={'signbuttons-container'}>
                {zodiacs.map((sign) => (
                    <div key={sign}>
                        {sign}
                        <img src={'zodiacs/' + sign + '.png'} alt={sign}  data-testid={sign}
                             onClick={() => handleClick(sign)} />
                    </div>
                    )
                )}
            </SignContainer>

            <SignDetailsContainer>
                <div className={'picture'}>
                    <img data-testid='result' title={chosenZodiac} src={'zodiacs/'+chosenZodiac+'-fancy.jpg'} alt={'missing epic zodiac art'}/>
                </div>
                <div className={'details'}>Details<br/>
                    <div>Zodiac Name: {chosenZodiac}</div>
                    <div>Compatibility: {zodiac.compatibility}</div>
                    <div>Mood: {zodiac.mood}</div>
                    <div>Color: {zodiac.color}</div>
                    <div>Lucky Number: {zodiac.lucky_number}</div>
                    <div>Lucky Time: {zodiac.lucky_time}</div>
                </div>
                <div className={'description'}>Today's Zodiac:<br/>{zodiac.description}</div>

            </SignDetailsContainer>
        </ZodiacPage>
    )
}

export default Zodiac;

const ZodiacPage = styled.div`
  width: 100%;
  margin: auto;
`;

const SignContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  
  @media (max-width: 800px) {
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 400px) {
    grid-template-columns: auto auto;
  }

  grid-gap: 20px;
  padding: 5px 20px 5px 20px;
  justify-content: space-evenly;
  div {
    width: calc(16.6% - 10px);
    text-transform: capitalize;
    text-align: center;
    font-size: 20px;
    
    img {
      width: 75px;
      height: 75px;
      :hover {
        transition-duration: 0.1s;
        transform: scale(1.2);
      }
    }
  }
  
`;

const SignDetailsContainer = styled.div`
  font-size: 25px;
  padding: 20px;
  margin: auto;
  display: grid;
  max-width: 75%;
  height: auto;
  grid-template-areas: 
    'picture details'
    'description description';
  grid-gap: 1rem;

  @media (max-width: 800px) {
    font-size: 19px;
  }
  @media (max-width: 600px) {
    font-size: 17px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
  
  .picture img {
    grid-area: picture;
    max-height: 300px;
    width: auto;
    max-width: 100%;
    height: auto;
  }
  .details {
    grid-area: details;
    max-width: 100%;
    height: auto;
    div{
      text-transform: capitalize;
      max-width: 100%;
      height: auto;
    }
  }
  .description {
    grid-area: description;
    max-width: 100%;
    height: auto;
  }

`;

const BackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  object-fit: contain;
  opacity: 0.9;
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