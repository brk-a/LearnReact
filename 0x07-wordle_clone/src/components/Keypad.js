import React, { useEffect, useState } from 'react'

const Keypad = ({usedKeys}) => {
    const [letters, setLetters] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/letters')
            .then(res => res.json())
            .then(json => {
                setLetters(json)
            });
    }, [setLetters]);
    return (
        <div className='keypad'>
            {letters && letters.map((letter) => {
                const colour = usedKeys[letter.key];
                return(
                    <div key={letter.key} className={colour}>{letter.key}</div>
                );
            })}
        </div>
    )
    }

export default Keypad
