import React from 'react';
import axios from 'axios'
import FlowerCard from './FlowerCard'
import FlowerUpdateForm from './FlowerUpdateForm';
import { withAuth0 } from '@auth0/auth0-react'

class FavFlower extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flowersArr: [],
            show: false,
            showFlag: false,
            name: '',
            instructions: '',
            flowerId: ''
        }
    }
    componentDidMount = () => {
        const { user,isAuthenticated } = this.props.auth0
        const email = user.email
        if(isAuthenticated)
        {
       console.log('hello')
        axios
            .get(`https://practice1235.herokuapp.com/getFlower?email=${email}`)
            .then(result => {
                this.setState({
                    flowersArr: result.data
                })
                console.log(this.state.flowersArr);
            })
            .catch(error => {
                console.log('error');
            })
    }}

    deleteFlower = (id) => {
        const { user } = this.props.auth0
        const email = user.email
        axios
            .delete(`https://practice1235.herokuapp.com/deleteFlower/${id}?email=${email}`)
            .then(result => {
                this.setState({
                    flowersArr: result.data
                })
            })
            .catch(error => {
                console.log('Error');
            })
    }
    updateFlower = (event) => {
        event.preventDefault()
        const { user } = this.props.auth0
        const email = user.email
        const obj = {
            name: event.target.name.value,
            instructions: event.target.instructions.value,
            email: email
        }
        axios
            .put(`https://practice1235.herokuapp.com/updateFlower/${this.state.flowerId}`, obj)
            .then(result => {
                this.setState({
                    flowersArr: result.data
                })
            })
            .catch(error => {
                console.log('error');
            })
    }

    handleClose = () => {
        this.setState({
            show: false,
            showFlag: false
        })
    }
    handleShow = () => {
        this.setState({
            show: true,
        })
    }
    showUpdateForm = (item) => {
        this.setState({
            showFlag: true,
            name: item.name,
            instructions: item.instructions,
            flowerId: item._id
        })
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
               {this.state.flowersArr.map((item)=>{
               return(
                   <FlowerCard
                   item={item}
                   showUpdateForm={this.showUpdateForm}
                   deleteFlower={this.deleteFlower}
                   />
               )
               })}
               
                <FlowerUpdateForm
                    show={this.state.showFlag}
                    handleClose={this.handleClose}
                    name={this.state.name}
                    instructions={this.state.instructions}
                    updateFlower={this.updateFlower}
                />
            </div>
        );
    }
}

export default withAuth0(FavFlower);