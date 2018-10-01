import React, {Component} from 'react';
import Button from './Button';

export default class HomeContent extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onClick}>
          {this.props.status}
        </Button>
      </div>
    );
  }
}


