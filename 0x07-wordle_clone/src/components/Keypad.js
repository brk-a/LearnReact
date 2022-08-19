import React, { useEffect, useState } from 'react'

const Keypad = () => {
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
                return(
                    <div key={letter.key}>{letter.key}</div>
                );
            })}
        </div>
    )
    }

export default Keypad
