import React from "react";


const footerStyle = {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: 'rgb(73, 79, 82)',
        color: 'white',
        textAlign: 'center',
        padding: '0.1rem'
        //padding: '0.1rem'
        //minHheight: '10vh'
}


const footer = () => {
    return (
        <div style={footerStyle}>
            <h3>React Store</h3>
        </div>
        
        
    )
}

export default footer;