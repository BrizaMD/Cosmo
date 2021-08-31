import React from 'react';
import styled from "styled-components";
import axios from "axios";
import aquarius from '../../static/img/aquarius.jpg';

const Zodiac = () => {
    let signHolder = 'aquarius';
    let buildUrl = 'https://aztro.sameerkumar.website/?sign=' + signHolder + '&day=today';

    const zodiacs = ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn'];



    // const zodiac = async () => {
    //     await axios.get(url)
    //         .then(async res =>{
    //             advice = await res.data.slip.advice;
    //         })
    //     console.log(advice);
    // }

    return(
        <div>
            <SignContainer className={'signbuttons-container'}>
                <div><img src={aquarius}  alt='Aquarius' /></div>
                <div><img src={aquarius}  alt='Pisces' /></div>
                <div><img src={aquarius}  alt='Aries' /></div>
                <div><img src={aquarius}  alt='Taurus' /></div>
                <div><img src={aquarius}  alt='Gemini' /></div>
                <div><img src={aquarius}  alt='Cancer' /></div>
                <div><img src={aquarius}  alt='Leo' /></div>
                <div><img src={aquarius}  alt='Virgo' /></div>
                <div><img src={aquarius}  alt='Libra' /></div>
                <div><img src={aquarius}  alt='Scorpio' /></div>
                <div><img src={aquarius}  alt='Sagittarius' /></div>
                <div><img src={aquarius}  alt='Capricorn' /></div>
            </SignContainer>

            <SignDetailsContainer>
                <div className={'picture'}><img alt={'epic zodiac art'}/></div>
                <div className={'name'}>Zodiac Name</div>
                <div className={'description'}>Today's Zodiac</div>
            </SignDetailsContainer>
        </div>
    )
}

export default Zodiac;


const SignContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
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
`;