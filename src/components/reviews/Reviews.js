import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview, restaurantId } = this.props;

    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    return (
      <ul>
        { associatedReviews.map((review, idx) => <Review key={idx} review={review} deleteReview={deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;