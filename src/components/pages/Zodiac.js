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
        <div>
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
                <div className={'name'}>Zodiac Name:<br/>{chosenZodiac}</div>
                <div className={'description'}>Today's Zodiac: {zodiac.description}</div>
            </SignDetailsContainer>
        </div>
    )
}

export default Zodiac;


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
      width: 68px;
      height: 68px;
    }
  }
  
`;

const SignDetailsContainer = styled.div`
  border: 2px gray solid; //this will help with styling until it is done
  padding: 30px;
  margin: 100px;
  display: grid;
  align-self: center;
  justify-self: center;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-template-areas: 
    'picture picture name name'
    'picture picture description description'
    'picture picture description description';
  grid-gap: 1rem;
  justify-content: space-evenly;
  .name {
    text-transform: capitalize;
  }
`;