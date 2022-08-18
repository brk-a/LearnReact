import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'

const Wordle = ({solution}) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup);
      return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup]);

    useEffect(() => {
      console.log(guesses, turn, isCorrect);
    }, [handleKeyup]); 
    
    return (
      <div>
          <div>solution: {solution}</div>
          <div>current guess: {currentGuess}</div>
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      </div>  
  );
}

export default Wordle