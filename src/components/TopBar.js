import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import Circle from './Circle';

export default class TopBar extends Component {
  
  render() {
    return (
      <header style={{
        height:          48,
        width:           '100%',
        backgroundColor: 'rgb(102,63,180)',
        color:           'white',
        padding:         '6px 10px',
        display:         'flex',
        flexDirection:   'row',
        alignItems:      'center'
      }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src="favicon-196x196.png"/>
          </Link>
        </div>
        <div>
          {'Modus Create'}
        </div>
        <div style={{float: 'left', color: 'white', flex: 1}} />
        <div style={{float: 'right', paddingRight: 20, marginBottom: this.props.circle ? -40 : 0}}>
          { this.props.circle ? <Circle></Circle> : <Button style={{backgroundColor: 'blue', color: 'white'}} onClick={this.props.onClick}>{this.props.statusLogin}</Button> }
          <Button style={{backgroundColor: 'red', color: 'white'}} onClick={this.props.onClick}>{this.props.statusLogout}</Button>
        </div>
      </header>
    );
  } 
}

const styles = {
  logo: {
    float:  'left',
    margin: 8
  }
};

