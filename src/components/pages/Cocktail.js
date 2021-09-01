import React, {useState} from 'react';
import axios from "axios";
import styled from "styled-components";

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
            <ButtonContainer>
                <p>If you want a good time or just drink something tasty...</p>
                <button onClick={()=> handleClick()}>Get a Drink!</button>
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

const DrinkContainer = styled.div`
  
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