import { Grid, Row } from '@carbon/react';
import { Button } from '@carbon/react';
import aptpic from './assets/apt1.jpg'


function Hero() {

    return(
        <>
       
       
        <Grid>
      
      
        <Row>
         
        <img src={aptpic} width="1080px" height="720px"
        ></img>
        </Row>
      </Grid>
         
       
        
        
        </>
    );
}

export default Hero