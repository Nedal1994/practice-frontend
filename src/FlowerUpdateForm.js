import React from 'react';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class FlowerUpdateForm extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update flower</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateFlower} >
                            <Form.Group className="mb-3">
                                <Form.Label>Flower name</Form.Label>
                                <Form.Control type="text" name='name' defaultValue={this.props.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Instructions</Form.Label>
                                <Form.Control type="text" name='instructions' defaultValue={this.props.instructions} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update flower
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default FlowerUpdateForm;