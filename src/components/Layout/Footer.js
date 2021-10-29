const Footer = () => {

    const footerStyle = {
        position: "relative",
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
        <footer style={footerStyle}>
            <h3>React Store</h3>
        </footer>
    )
}
export default Footer;