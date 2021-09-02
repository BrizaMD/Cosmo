import React, {useContext, useState} from 'react';
import styled from "styled-components";
import video1 from '../../static/video/Heart - 44010.mp4';
import video from "../../static/video/roses.mp4";
import cover from '../../static/img/heart.jpg'
import ThemeContext from "../../context/ThemeProvider";


const Love = () => {

    const [isResultAvailable, setResultAvailable] = useState(false);
    const [firstHuman, setFirstHuman] = useState('Your name');
    const [secondHuman, setSecondHuman] = useState('Your partner name');
    const [result, setResult] = useState({
        percentage: "",
        result: ""
    });

    const { isOriginal } = useContext(ThemeContext);

    const firstInputArea = (e) => {
        setFirstHuman(e.target.value);
        setResultAvailable(false);
    }
    const secondInputArea = (e) => {
        setSecondHuman(e.target.value);
        setResultAvailable(false);
    }

    const myChangeHandler = (event) => {
        event.preventDefault();
        let axios = require("axios").default;

        let options = {
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: {fname: firstHuman, sname: secondHuman},
            headers: {
                'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
                'x-rapidapi-key': '160cd4edfbmshb786acd93bda484p1a7f39jsn4b3f394c969f'
            }
        };

        axios
            .request(options)
            .then(function (response) {
                setResult(
                    {
                        percentage: response.data.percentage,
                        result: response.data.result
                    }
                )
                setResultAvailable(true);
            })
            .catch(function (error) {
                console.error(error);
        });
    }

    return (
        <>
            <BackgroundContainer>
                <video hidden={isOriginal} autoPlay loop muted data-testid="background-video">
                    <source src={video} type="video/mp4"/>
                </video>

                <video hidden={!isOriginal} autoPlay loop muted data-testid="background-video">
                    <source src={video1} type="video/mp4"/>
                </video>
            </BackgroundContainer>

            <Card>
                <img src={cover} alt="daisy"/>
                <CardBody>
                    <FormContainer>
                        <form onSubmit={myChangeHandler}>
                            <label> Love Compatibility</label>

                            <input type="text" required value={firstHuman}
                                   onChange={firstInputArea}
                                   data-testid="firstPerson"
                            />
                            <input type="text" required value={secondHuman}
                                   onChange={secondInputArea}
                                   data-testid="secondPerson"
                            />
                            <button onClick={myChangeHandler}
                                    data-testid="calculate"
                            >Calculate it!</button>
                        </form>
                    </FormContainer>
                </CardBody>
            </Card>


            {
                isResultAvailable ?

                    <ResultContainer data-testid="result">

                        <div>{result.result}</div>

                        <Result>
                            <Progress data-size="20" style={{width: result.percentage  + '%'}}>
                                <Percentage>{result.percentage} %</Percentage>
                            </Progress>
                        </Result>


                    </ResultContainer>
                    :
                    <></>
            }
        </>
    )
}

export default Love;

const ResultContainer =styled.div`
  border: transparent;
  max-width: 550px;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto; 
  align-items: center;
  text-align: center;
  font-size: x-large;
`;

const Percentage = styled.div`
  text-align: center;
  color: white;
  font-size: small;
`;

const Progress = styled.div`
  background: #ad5389;
  background: -webkit-linear-gradient(to bottom, #3c1053, #ad5389);
  background: linear-gradient(to bottom, #3c1053, #ad5389);
  border-radius: 3px;
  height: 30px;
  width: 0;
  transition: width 0.5s ease-in;

`;

const Result = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin: 15px;
  height: 30px;
  width: 300px;
  max-width: 100%;
  p{
    text-align: center;
  }
`;

const Card = styled.div`
  box-shadow: 0 0 30px 1px;
  border-radius: initial;
  min-width: 28rem;
  display: flex;
  max-width: 200px;
  margin: 50px auto  0 auto;
  text-align: center;


  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 11rem;
    height: 11rem;
    object-fit: cover;
    transform: scale(1.1);
  }

`;

const CardBody = styled.div`
  margin: 1rem;

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
  z-index: -1;
  position: relative;
  background: pink;

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
  text-align: center;


  label {
    text-align: left;
    display: block;
  }

  input, textarea {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }

  button {
    background: #f1356d;
    color: white;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;

  }
`;
