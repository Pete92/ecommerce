import React from "react";
import {Link} from 'react-router-dom';


/* NAPPI SIVU */

function Buttons({item}) {

    //const [opacity, setOpacity] = useState("0.6")


    //Kun hiiri on päällä
    const onMouse = (e) => {
        e.target.style.opacity = '1';
    }

    const MouseLeave = (e) => {
        e.target.style.opacity = '0.6';
    }

    const buttonStyle = {
        backgroundColor: 'rgb(73, 79, 82)',
        border: 'solid black',
        color: 'white',
        padding: '4px 23px',
        textAlign: 'center',
        fontSize:' 16px',
        margin: '4px 2px',
        //opacity: `${option}`,
        opacity: '0.6',
        transition: '0.3s',
        display: 'inline-block',
        textDecoration: 'none',
        cursor: 'pointer',
        borderRaidius: 'none',
    }


    const buttonDiv = {
        display: 'inline-flex',
        float: 'right'
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'white'
    }


    return(
            <div className="button" 
            style={buttonDiv}>
                <button style={buttonStyle}
                    onMouseOver={onMouse}
                    onMouseLeave={MouseLeave}
                    /* onMouseEnter={() => setOpacityDetail("1")}
                    onMouseLeave={() => setOpacityDetail("0.6")} */
                > 
                <Link 
                to={`/shop/${item.id}`} 
                style={ linkStyle }
                >
                    Details
                </Link>
                </button>

                <button 
                    style={buttonStyle}
                    onMouseOver={onMouse}
                    onMouseLeave={MouseLeave}
                > 
                    Buy
                </button>
            </div>
    )
}

export default Buttons;