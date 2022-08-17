import { useState } from "react"

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0); //tracks the no. of tries (guesses, if you  like)
    const [currentGuess, setCurrentGuess] = useState(''); //what is the user typing right now?
    const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array of 6 undefined elements
    const [history, setHistory] = useState([]); // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false);

    // format a guess into an array of letter objects
    // e.g. [{key: 'a', colour: 'yellow'}]
    const formatGuess = () => {
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, colour: 'grey'};
        });

        //find all letters that will be coloured green
        formattedGuess.forEach((letter, i) => {
            if (solutionArray[i] === letter.key) {
                formattedGuess[i].colour = 'green';
                solutionArray[i] = null;
            }
        });
        
        //find all letters that will be coloured yellow
        formattedGuess.forEach((letter, i) => {
            if (solutionArray.includes(letter.key) && letter.colour !== 'green') {
                formattedGuess[i].colour = 'yellow';
                solutionArray[solutionArray.indexOf(letter.key)] = null;
            }
        });

        //return the formattedGuess
        return formattedGuess;
    };

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess= (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formatGuess;
            return newGuesses;
        });

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        });

        setTurn((prevTurn)=>{
            return prevTurn + 1;
        });

        //re-set currentGuess after each turn (guess, if you like)
        setCurrentGuess('');
    };

    // handle keyip event & track current guess
    // if user presses `enter`, add the new guess
    const handleKeyup = ({key}) => {
        if (key === 'Enter') {
            // only add guess if turn < 5
            if (turn > 5) {
                console.log('you used all your guesses');
                return;
            }

            // no duplicate words
            if (history.includes(currentGuess)) {
                console.log('you already tried that one');
                return;
            }

            // word must be 5 chars long
            if (currentGuess.length !== 5) {
                console.log('word must be 5 chars long');
                return;
            }

            //when all conditions are by-passed. i.e. currentGuess is valid
            const formatted = formatGuess();
            addNewGuess(formatted);
        }
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0,-1);
            });
            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key;
                });
            }
        }
    };

    //return items required
    return {turn, currentGuess, guesses, isCorrect, handleKeyup};
}

export default useWordle