import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";

const Zodiac = () => {
    const zodiacs = ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn'];
    const [chosenZodiac, setChosenZodiac] = useState('aquarius');
    const [zodiac, setZodiac] = useState({
        data_range: '',
        current_date: '',
        description: '',
        compatibility: '',
        mood: '',
        color: '',
        lucky_number: '',
        lucky_time: ''
    })

    useEffect((chosenZodiac) => {
        axios.post('https://aztro.sameerkumar.website/?sign=aquarius&day=today')
            .then( async res => {
                await setZodiac({
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
        <ZodiacPage>
            <SignContainer className={'signbuttons-container'}>
                {zodiacs.map((sign) => (
                    <div key={sign}>
                        {sign}
                        <img src={'zodiacs/' + sign + '.jpg'} alt={sign} onClick={(e) => handleClick(sign)} />
                    </div>
                    )
                )}
            </SignContainer>

            <SignDetailsContainer>
                <div className={'picture'}><img alt={'missing epic zodiac art'}/></div>
                <div className={'details'}>Details<br/>
                    <div>Zodiac Name:{chosenZodiac}</div>
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
  border: 2px gray solid; //this will help with styling until it is done
  grid-gap: 1rem;
  justify-content: space-evenly;
  div {
    width: calc(16.6% - 10px);
    padding: 15px 20px 10px 20px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    
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
  
  .picture {grid-area: picture;}
  .details {grid-area: details;}
  .description {grid-area: description;}
  
  border: 2px gray solid; //this will help with styling until it is done
  padding: 30px;
  margin: auto;
  display: grid;
  max-width: 50%;
  // grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-template-areas: 
    'picture picture details details'
    'picture picture details details'
    'picture picture details details'
    'description description description description'
    'description description description description';
  grid-gap: 1rem;
  .name {
    text-transform: capitalize;
  }
`;