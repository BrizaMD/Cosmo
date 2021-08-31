import React from 'react';
import styled from "styled-components";

const Zodiac = () => {
    const zodiacs = ['aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn'];

    return(
        <div>
            <SignContainer className={'signbuttons-container'}>
                {zodiacs.map((sign) => (
                    <div key={sign}>
                        {sign}
                        <img src={'zodiacs/' + sign + '.jpg'} alt={sign} />
                    </div>
                    )
                )}
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