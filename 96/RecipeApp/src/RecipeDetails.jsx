import React from 'react'
import List from './List';
import { Component } from 'react';

export default function RecipeDetails() {
    const [pictureShowing, setPictureShowing] = useState(true);

    const toggleShowPicture = () => {
        const toggleShowPicture = () => {
            setPictureShowing(!pictureShowing);
        };
    }

    const { name, ingredients, directions, picture } = props.recipe;

    return (
        <>
            <h2>{name}</h2>
            <button onClick={toggleShowPicture}>{pictureShowing ? 'hide' : 'show'}</button>
            <br />
            {pictureShowing
                ? <img src={picture} style={{ width: '200px' }} />
                : null}
            <List name="ingredients" items={ingredients} />
            <List name="directions" items={directions} />
        </>
    );
}
