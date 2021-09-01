import React, {useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import video from "../../static/video/cocktail.mp4";

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
        ingredients: null
    })

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
                    ingredients: null,
                })
            })
    }

    return(
        <DrinksContainer>
            <BackgroundContainer>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </BackgroundContainer>
            <ButtonContainer>
                <h1>If you want a good time or just drink something tasty...</h1>
                <CocktailButton onClick={()=> handleClick()}>Get a Drink!</CocktailButton>
            </ButtonContainer>
            {randomDrink.id === '' ?
                <></> :
                <DrinkContainer>
                    <div id={'cocktailImage'}>
                        <img alt='cocktail' src={randomDrink.picture} />
                    </div>
                    <div id={'details'}>
                        <div>Name: {randomDrink.name}</div>
                        <div>Category: {randomDrink.category}</div>
                        <div>Alcohol Content: {randomDrink.alcoholContent}</div>
                        <div>Serve it in: {randomDrink.glassType}</div>
                        <div>Instructions: {randomDrink.instructions_EN}</div>
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
  font-family: 'PT Sans', sans-serif;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;

const DrinkContainer = styled.div`
  display: flex;
  border: 1px solid black; //just to see where it is
    
  #details {
    
  }
  
  #cocktailImage{
    //float: left;
  }

    img {
      max-width: 300px;
      height: auto;
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