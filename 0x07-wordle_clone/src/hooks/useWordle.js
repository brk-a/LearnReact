import { useState } from "react"

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0); //tracks the no. of tries (guesses, if you  like)
    const [currentGuess, setCurrentGuess] = useState(''); //what is the user typing right now?
    const [guesses, setGuesses] = useState([]); // each guess is an array
    const [history, setHistory] = useState([]); // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false);

    // format a guess into an array of letter objects
    // e.g. [{key: 'a', colour: 'yellow'}]
    const formatGuess = () => {};

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess= () => {};

    // handle keyip event & track current guess
    // if user presses `enter`, add the new guess
    const handleKeyUp = ({key}) => {
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0,-1);
            });
            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess < 5) {
                setCurrentGuess((prev) => {
                    return prev + key;
                });
            }
        }
    };

    //return items required
    return {turn, currentGuess, guesses, isCorrect, handleKeyUp};
}

export default useWordle