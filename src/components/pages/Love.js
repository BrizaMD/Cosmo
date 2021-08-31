import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import video from '../../static/video/Love - 3191.mp4';

const Love = () => {

    const [firstHuman, setFirstHuman] = useState('Your name');
    const [secondHuman, setSecondHuman] = useState('Your partner name');


    const myChangeHandler = (event) => {
        this.setState({username: event.target.value});
        setFirstHuman(event.target.value);
    }

    return (
        <>
            <HeroContainer>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </HeroContainer>
            <FormContainer>
                <form>
                    <label> Love Compatibility</label>
                    <input type="text" required value={firstHuman} onChange={myChangeHandler}/>
                    <input type="text" required  value={secondHuman} onChange={myChangeHandler}/>
                </form>
                <button>Calculate it!</button>
            </FormContainer>
        </>
    )
}

export default Love;

const HeroContainer = styled.div`
  //height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  opacity: 0.3;

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

`;

const FormContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    text-align: center ;

    
  label{
    text-align: left;
    display: block;
  }
  
  input, textarea{
    width:100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }
  
  button{
    background: #f1356d;
    color: white;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    
  }
`;