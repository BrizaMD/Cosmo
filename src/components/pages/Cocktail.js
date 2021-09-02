import React, {useContext, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import video from "../../static/video/cocktail.mp4";
import video1 from "../../static/video/winebar.mp4";
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
        <DrinksContainer className={isOriginal ? 'original-cocktail' : 'secondary-cocktail'}>
            <BackgroundContainer data-testid="background-video">
                <video hidden={isOriginal} autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>

                <video hidden={!isOriginal} autoPlay loop muted>
                    <source src={video1} type="video/mp4"/>
                </video>
            </BackgroundContainer>
            <h1 data-testid='title'>If you want a good time or just drink something tasty...</h1>
                <ButtonContainer>
                    <CocktailButton data-testid='cocktail-button' onClick={()=> handleClick()}>Get a Drink!</CocktailButton>
            </ButtonContainer>
            {randomDrink.id === '' ?
                <></> :
                <DrinkContainer data-testid="result">
                    <div id={'cocktailImage'}>
                        <img alt='cocktail' src={randomDrink.picture} />
                    </div>
                    <div className={isOriginal ? 'original-cocktail' : 'secondary-cocktail'} id={'details'}>
                        <div>Name: {randomDrink.name}</div>
                        <div>Category: {randomDrink.category}</div>
                        <div>Alcohol Content: {randomDrink.alcoholContent}</div>
                        <div>Serve it in: {randomDrink.glassType}</div>
                        <div>Tips: {randomDrink.instructions_EN}</div>

                        <a className={isOriginal ? 'og-c-link' : 'sn-c-link'} href={randomDrink.recipeUrl}>Find the recipe here!</a>
                    </div>
                </DrinkContainer>
            }
        </DrinksContainer>
    )
}

export default Cocktail;



const DrinksContainer = styled.div`

  align-items: center;
  justify-content: center;
  font-size: 15px;
  h1{
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 5px;
  margin: auto;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  text-align: center;
  

`;

const CocktailButton = styled.button`
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #242424;
  transition: all 0.3s ease-out;
  border: 1px solid #242424;
  :hover{
    transition: all 0.3s ease-out;
    color: black;
    background: white;
  }
`;

const DrinkContainer = styled.div`
  top: 20%;
  text-align: center;
  font-size: 13px;
  #cocktailImage {
    img {
      max-width: 200px;
      border:2px solid transparent;
      box-shadow:0 0 8px 8px transparent inset;
      border-top: 5px solid black;
      border-bottom: 5px solid black;
    
    }
  }
  a{
    text-align: center;
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
  opacity: 0.6;
  z-index: -1;
  position: relative;

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    filter: blur(3px);
    -webkit-filter: blur(3px);
  }

`;