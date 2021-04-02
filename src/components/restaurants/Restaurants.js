import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const { restaurants, deleteRestaurant } = this.props;
    return(
      <ul>
        { restaurants.map(rest => <Restaurant key={rest.id} restaurant={rest} deleteRestaurant={deleteRestaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;