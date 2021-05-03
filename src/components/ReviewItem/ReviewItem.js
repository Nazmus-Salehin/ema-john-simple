import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    console.log(props);
    const { img, name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (

        <div className="container">
            <div className="d-inline-flex">
                <div className="col-1">
                    <img className="reviewImage " src={img} alt="" />
                </div>
                <div style={reviewItemStyle} className="review-item col-8">
                    <h4 className="product-name">{name}</h4>
                    <p>Quantity: {quantity}</p>
                    <p><small>$ {price}</small></p>
                    <br />
                    <button
                        className="main-button"
                        onClick={() => props.removeProduct(key)}
                    >Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;