import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import './userdetail.css';

const styles = {
    img: {
      width: 100
    }
  };

export default class UserDetail extends Component {
    componentDidMount() {
        const match = this.props
        console.log('match params', match);
      }
    render() {
        const id = localStorage.getItem('id');
        const data = JSON.parse(localStorage.getItem('data'));
        console.log('iiid', id);
        console.log('data', data);
        return (
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={data.picture} alt={data.first_name} style={{...styles.img}} className="img-center"></img>
                        <div className="container">
                            <h2>{data.first_name} {data.last_name}</h2>
                            <p className="title">name</p>
                            <p>{data.phone}</p>
                            <p className="title">phone</p>
                            <p>{data.email}</p>
                            <p className="title">email</p>
                            <Link to="/users">
                            <p><button className="button">Back</button></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}