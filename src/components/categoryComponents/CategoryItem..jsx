import React, { Component } from 'react';

export default class CategoryListItem extends Component {

  render() {
    return (
    <span>
          {`Category: ${this.props.item.name}, 
           Budget: ${this.props.item.budget} euros `}
      </span>  
    );
  }
}

