import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const ProductDetail = () => {
    let {productKey} = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/product/'+ productKey)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [productKey])
    

    document.title = "Product Detail";

    return (
        <div>
            <h1>Your Product Detail.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;