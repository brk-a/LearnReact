import React from 'react';

const Characters = ({characterArray, deleteCharacter}) => {
    const characterList = characterArray.map(character => {
        return(
            <div className="character" key={character.id}>
                <div> Name: {character.name} </div>
                <div> Age: {character.age} </div>
                <button onClick={() => {deleteCharacter(character.id)}}>Delete</button>
            </div>
        )
    });

    return(
        <div className="character-list">
            {characterList}
        </div>
    );
}

export default Characters