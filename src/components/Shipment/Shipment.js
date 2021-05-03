import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        console.log('form submitted', data)

        const savedCart = getDatabaseCart();
        const orderDetails = { ...loggedInUser, products: savedCart, shipment: data, orderTime: new Date() };

        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    processOrder();
                    alert('your order placed successfully');
                }
            })

    };

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input type="name" defaultValue={loggedInUser.name} {...register('name', { required: true })} placeholder="Your Name" />
            {errors.name && <span className="error">Name is required</span>}

            <input type="email" defaultValue={loggedInUser.email} {...register('email', { required: true })} placeholder="Your Email" />
            {errors.email && <span className="error">Email is required</span>}

            <input type="address" {...register('address', { required: true })} placeholder="Your Address" />
            {errors.address && <span className="error">Address is required</span>}

            <input type="phone" {...register('phone', { required: true })} placeholder="Your Phone Number" />
            {errors.phone && <span className="error">Phone Number is required</span>}


            <input type="submit" />
        </form>
    );
};

export default Shipment;