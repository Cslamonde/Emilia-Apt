import aptpic from './assets/apt1.jpg'
import { FlexGrid, Row, Column,Tile } from '@carbon/react';



function Card(){
return(
    <>

    <FlexGrid fullWidth>
  <Row>
    <Column sm={2} md={4} lg={8}>
  
    <img width="300px" height="400px"className="card-image" src={aptpic} alt="Pool Picture"></img>
    <h2 className="card-title">Pool</h2>
    <p className="card-text">Experience the epitome of comfort</p>
    
    </Column>
    <Column sm={2} md={4} lg={8}> 
    
    <img width="300px" height="400px"className="card-image" src={aptpic} alt="Pool Picture"></img>
    <h2 className="card-title">Pool</h2>
    <p className="card-text">Experience the epitome of comfort</p>
   
    </Column>
    <Column sm={2} md={4} lg={8}> 
    
    <img width="300px" height="400px"className="card-image" src={aptpic} alt="Pool Picture"></img>
    <h2 className="card-title">Pool</h2>
    <p className="card-text">Experience the epitome of comfort</p>
   
    </Column>
    <Column sm={2} md={4} lg={6}>
    
    <img width="300px" height="400px"className="card-image" src={aptpic} alt="Pool Picture"></img>
    <h2 className="card-title">Pool</h2>
    <p className="card-text">Experience the epitome of comfort</p>
   
    </Column>
    </Row>
  </FlexGrid>
   
    </>
);
}

export default Card