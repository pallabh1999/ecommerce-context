import React from "react";
import iImg from "../../Assets/mobile phones/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.webp";
import tvImg from '../../Assets/tv/-original-imagg6gfu2mtszex.webp';
import sImg from '../../Assets/shoes/-original-imagmdbv2pyuh6tx.webp';
import SofaImg from '../../Assets/sofas/0-68-6-green-velvet-3-2-170-2-26-0-32-0-127-arra2854-68-6-arra-original-imagjte3aqtzkgqs.webp';
import Product from "./Product";

const productsArr = [
  {
    title: 'Iphone 13',
    price: 57999,
    imageUrl: iImg,
    key: 'p1'
  },
  {
    title: 'MI Tv',
    price: 22199,
    imageUrl: tvImg,
    key: 'p2'
  },
  {
    title: 'Adidas Shoes',
    price: 1599,
    imageUrl: sImg,
    key: 'p3'
  },
  {
    title: 'Sofa Set',
    price: 25999,
    imageUrl: SofaImg,
    key: 'p4'
  },
];

const ProductArr = () => {

    const productElements = productsArr.map((prod) => ({
        key : prod.key,
        title: prod.title,
        img : prod.imageUrl,
        price : prod.price
    }
    ));

  return (
    <div>
      <Product items={productElements} />
    </div>
  );
};

export default ProductArr;
