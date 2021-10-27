import React from "react";


const Footer = () => {


    
    
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

    return (
        <footer style={footerStyle} className="footer">
            <h3>React Store</h3>
        </footer>
        
        
    )
}

export default Footer;