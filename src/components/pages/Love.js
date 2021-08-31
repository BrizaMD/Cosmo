import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import video from '../../static/video/Love - 3191.mp4';
import cover from '../../static/img/daisies.jpg'


const Love = () => {

    const [firstHuman, setFirstHuman] = useState('Your name');
    const [secondHuman, setSecondHuman] = useState('Your partner name');


    const myChangeHandler = (event) => {
        this.setState({username: event.target.value});
        setFirstHuman(event.target.value);
    }

    return (
        <>
            <BackgroundContainer>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </BackgroundContainer>



            <Card>
                <img src={cover} alt="picture" />
                <CardBody>

                    <FormContainer>
                        <form>
                            <label> Love Compatibility</label>

                            <input type="text" required value={firstHuman} onChange={myChangeHandler}/>
                            <input type="text" required  value={secondHuman} onChange={myChangeHandler}/>

                        </form>
                        <button>Calculate it!</button>
                    </FormContainer>

                </CardBody>

            </Card>


        </>
    )
}

export default Love;

const Card = styled.div`
    box-shadow: 0 0 20px 5px;
    //border-radius: initial;
    min-width: 28rem;
    display: flex;
    max-width: 400px;
    margin: 0 auto;
    text-align: center ;


  
  img{
    width: 15rem;
    height: 11rem;
    object-fit: cover;
    transform: scale(1.1);
  }
  
`;

const CardBody = styled.div`
    margin:1rem;

`;

const BackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  opacity: 0.3;
  z-index:-1 ;
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