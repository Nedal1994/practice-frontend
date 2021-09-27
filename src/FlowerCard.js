import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class FlowerCard extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img src={this.props.item.photo} />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        <Card.Text>
                            {this.props.item.instructions}
                        </Card.Text>
                        <Button variant="primary"
                            onClick={() => this.props.deleteFlower(this.props.item._id)}>
                            Delete flower</Button>
                        <Button variant="primary"
                            onClick={() => this.props.showUpdateForm(this.props.item)}>
                            Update flower</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default FlowerCard;