import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './AddFlowers.css'

class AddFlowers extends React.Component {
    render() {
        return (
            <div>
                {this.props.flowersArr.map((item) => {
                    return (
                        <Card style={{ width: '18rem' }} >
                            <Card.Body>
                                <Card.Img src={item.photo}/>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.instructions}</Card.Text>
                                <Button type='submit' 
                                onClick={()=>{this.props.addFlower(item)}}>Add flower</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        );
    }
}

export default AddFlowers;