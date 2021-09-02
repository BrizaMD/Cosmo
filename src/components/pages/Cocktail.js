import React, {useContext, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import video1 from "../../static/video/cocktail.mp4";
import video from "../../static/video/winebar.mp4";
import ThemeContext from "../../context/ThemeProvider";

const Cocktail = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const [randomDrink, setRandomDrink] = useState({
        id: '',
        name: '',
        category: '',
        alcoholContent: '',
        glassType: '',
        instructions_EN: '',
        picture: '',
        recipeUrl: ''
    })

    const { isOriginal } = useContext(ThemeContext);

    const handleClick = async function() {
        await axios.get(url)
            .then( async res => {
                await setRandomDrink({
                    id: res.data['drinks'][0]['idDrink'],
                    name: res.data['drinks'][0]['strDrink'],
                    category: res.data['drinks'][0]['strCategory'],
                    alcoholContent: res.data['drinks'][0]['strAlcoholic'],
                    glassType: res.data['drinks'][0]['strGlass'],
                    instructions_EN: res.data['drinks'][0]['strInstructions'],
                    picture: res.data['drinks'][0]['strDrinkThumb'],
                    recipeUrl: 'https://www.google.com/search?q=' + res.data['drinks'][0]['strDrink'] + ' cocktail recipe',
                })
            })
    }

    return(
        <DrinksContainer>
            <BackgroundContainer>
                <video hidden={isOriginal} autoPlay loop muted data-testid="background-video">
                    <source src={video} type="video/mp4"/>
                </video>

                <video hidden={!isOriginal} autoPlay loop muted data-testid="background-video">
                    <source src={video1} type="video/mp4"/>
                </video>
            </BackgroundContainer>
            <ButtonContainer>
                <h1 data-testid='title'>If you want a good time or just drink something tasty...</h1>
                <CocktailButton data-testid='cocktail-button' onClick={()=> handleClick()}>Get a Drink!</CocktailButton>
            </ButtonContainer>
            {randomDrink.id === '' ?
                <></> :
                <DrinkContainer data-testid="result">
                    <div id={'cocktailImage'}>
                        <img alt='cocktail' src={randomDrink.picture} />
                    </div>
                    <div id={'details'}>
                        <div>Name: {randomDrink.name}</div>
                        <div>Category: {randomDrink.category}</div>
                        <div>Alcohol Content: {randomDrink.alcoholContent}</div>
                        <div>Serve it in: {randomDrink.glassType}</div>
                        <div>Tips: {randomDrink.instructions_EN}</div>
                        <a href={randomDrink.recipeUrl}>Find the recipe here!</a>
                    </div>
                </DrinkContainer>
            }
        </DrinksContainer>
    )
}

export default Cocktail;

const DrinksContainer = styled.div`
  color: white;
  text-shadow: 2px 2px crimson;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
`;

const CocktailButton = styled.button`
  background-color: #ffc5c5;
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  :hover{
    background-color: crimson;
  }
`;

const DrinkContainer = styled.div`

  color: white;
  text-shadow: 2px 2px crimson;

  #cocktailImage {
    img {
      max-width: 300px;
    }
  }

  div {
    color: white;
    text-shadow: 2px 2px crimson;
  }

  a {
    color: white;

    :hover {
      color: #ffc5c5;
    }
  }
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