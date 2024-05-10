import React, { useState ,useEffect} from "react";

function Colors() {
    const [color, setColor] = useState('#000000');

    function Randomi(length) {
        return Math.floor(Math.random() * length);
    }

    function HandleRandomColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Randomi(hex.length)];
        }
        setColor(hexColor);
    }
    useEffect(()=>{
        document.body.style.backgroundColor=color
    },[color])
    return (
        <div className="container">
            <h1>Advanced Color Change/ Manipulation</h1>
            <button onClick={HandleRandomColor}>GENERATE RANDOM COLOR</button>
            <p>Current Color: {color}</p>
        </div>
    );
}

export default Colors;
