import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import AddFlowers from './AddFlowers'

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          flowersArr: [],
          newFlowers:[],
          show: false,
          showFlag: false,
          name: '',
          instructions: '',
          photo:'',
          flowerId: ''
        }
      }

    componentDidMount = () => {
        const { user } = this.props.auth0
        const email = user.email
        axios
          .get(`https://practice1235.herokuapp.com/flowers?email=${email}`)
          .then(result => {
            this.setState({
              flowersArr: result.data
            })
            console.log(this.state.flowersArr);
          })
          .catch(error => {
            console.log('error');
          })
      }

      addFlower = (selectedFlower) =>{
          console.log('ok',selectedFlower)
          const { user } = this.props.auth0
          const email = user.email
          const obj={
              name:selectedFlower.name,
              instructions:selectedFlower.instructions,
              photo:selectedFlower.photo,
              email:email
          }
          console.log(obj);
          axios
          .post('https://practice1235.herokuapp.com/addFlower' ,obj)
          .then(result =>{
              this.setState({
                  newFlowers:result.data
              })
          })
          .catch(error => {
            console.log('error');
          })
      }
    render() {
        return (
            <div>
                <AddFlowers
                flowersArr={this.state.flowersArr}
                addFlower = {this.addFlower}
                />
            </div>
        );
    }
}

export default withAuth0(Main);