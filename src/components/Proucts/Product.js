import React, { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import Button from '../UI/Button';
import './Product.css';
import iImg from "../../Assets/mobile phones/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.webp";
import tvImg from '../../Assets/tv/-original-imagg6gfu2mtszex.webp';
import sImg from '../../Assets/shoes/-original-imagmdbv2pyuh6tx.webp';
import SofaImg from '../../Assets/sofas/0-68-6-green-velvet-3-2-170-2-26-0-32-0-127-arra2854-68-6-arra-original-imagjte3aqtzkgqs.webp';
import { Link } from 'react-router-dom';

const productsArr = [
  {
    title: 'Iphone 13',
    price: 57999,
    imageUrl: iImg,
    key: 'p1',
    element: 'Iphone',
  },
  {
    title: 'MI Tv',
    price: 22199,
    imageUrl: tvImg,
    key: 'p2',
    element: 'TVSet',
  },
  {
    title: 'Adidas Shoes',
    price: 1599,
    imageUrl: sImg,
    key: 'p3',
    element: 'Shoes',
  },
  {
    title: 'Sofa Set',
    price: 25999,
    imageUrl: SofaImg,
    key: 'p4',
    element: 'Sofa',
  },
];

const Product = () => {
  const cartContext = useContext(CartContext);
  // console.log(cartContext.email);
  const addToCartHandler = async(product) => {
    
    try {
      const email = cartContext.email; 
      const response = await fetch('https://crudcrud.com/api/50b6386e79fa40ffba42d120115e915e/cart', {
       
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item: product,
          email: email,
        }),
      }); 
      if (!response.ok) {
        throw new Error('Failed to add item to cart.');
      }
      const data = await response.json();
      const prod= {
        item : data.item,
        id : data._id
      }
      console.log(prod);
      cartContext.addToCart(prod);
    } catch (error) {
      console.error(error.message);
    }

  };

  const productElements = productsArr.map((prod) => (
    <div className="product" key={prod.key}>
      <Link to={`/store/${prod.element}`} key={prod.key}>
        <img src={prod.imageUrl} alt={prod.title} />
        <h3>{prod.title}</h3>
        <p className="product-price">Rs {prod.price}</p>
      </Link>
      <Button className="button" onClick={() => addToCartHandler(prod)}>
        Add To Cart
      </Button>
    </div>
  ));

  return (
    <>
      <h2 className="category">Items</h2>
      <div className="container">{productElements}</div>
    </>
  );
};

export default Product;
