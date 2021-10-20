import React from "react";
import {Container} from 'react-bootstrap';
function About() {
  

  //Poistetaan class footerista
  if(window.location.pathname){
    var elements = document.getElementsByClassName("relativeFooter");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('relativeFooter');
    }
  }


  return (
      <Container style={{textAlign: 'center', marginTop: '20%'}}>
        <h3>Reactin opettelua</h3>
        <p>Jatkan tätä pikkuhiljalleen. Kokeilen kasata verkkokauppa harjoituksen ja lisäilen osina GitHubiin.</p>
      </Container>
  );
}
export default About;