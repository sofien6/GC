import React from 'react'
import Card from 'react-bootstrap/Card'

class CardComponent extends React.Component{
render(){
    return(
<Card className='Card'>
<Card.Img style={{width:'150px',margin:'0 auto'}} variant="top" src={this.props.image} />
<Card.Body>
<Card.Title style={{fontWeight:'bold',textAlign:'center'}}>{this.props.title}</Card.Title>
<Card.Text>{this.props.content}</Card.Text>
</Card.Body>
</Card>
    );
}
}
 
export default CardComponent;
