import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

const Wordle = ({solution}) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);
    const {showModal, setShowModal} = useState(false);

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup);
  
      if (isCorrect) {
        setTimeout(() => setShowModal(true), 2000);
        console.log('congrats, you win');
        window.removeEventListener('keyup', handleKeyup);
      }
      if (turn > 5) {
        setTimeout(() => setShowModal(true), 2000);
        console.log('unlucky, out of guesses');
        window.removeEventListener('keyup', handleKeyup);
      }
  
      return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, setShowModal, isCorrect, turn]);
    
    return (
      <div>
          <div>solution: {solution}</div>
          <div>current guess: {currentGuess}</div>
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
          <Keypad usedKeys={usedKeys}/>
          {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
      </div>  
  );
}

export default Wordle