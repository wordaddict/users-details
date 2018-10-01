import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import getUsers from '../services/userlist';
import './userlist.css';
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            userDetails: {}
        }
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }

    componentDidMount() {
        getUsers()
            .then((data) => {
                const final = data.results;
                console.log('final', final);
                this.setState({
                    userData: final
                })
            })
    }

    handleDetailsClick(data) {
        console.log('dt', data);
        localStorage.setItem('data', JSON.stringify(data));
        const id = data.id;
        this.props.history.push({
            pathname: `/details/${id}`,
             state: {
                key: data
            } 
        });
        console.log('I was clicked for the details');
    }

    render() {
        const finalData = this.state.userData;
        return (
            <div className="users-list">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
                <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
                <div className="container">
                    <div className="row">
                        <div className="panel panel-default user_panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">User List</h3>
                            </div>
                            <div className="panel-body">
                                <div className="table-container">
                                    <table className="table-users table" border="0">
                                        <tbody>
                                            <tr>
                                                <th>Firstname</th>
                                                <th>Lastname</th> 
                                                <th>Email</th>
                                                <th>Phone number</th>
                                            </tr>
                                            {finalData.map((element) => {
                                                localStorage.setItem('id', element.id)
                                                return <tr key={element.id} data-item={element} onClick={()=>this.handleDetailsClick(element)}>
                                                <td>
                                                    {element.first_name}<i className="fa fa-envelope"></i>
                                                </td>
                                                <td>
                                                    {element.last_name}
                                                </td>
                                                <td>
                                                    {element.email}
                                                </td>
                                                <td>
                                                    {element.phone}
                                                </td>
                                            </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UserList);
