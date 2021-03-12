import React, {useEffect, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import axios from "axios";
import ProductList from "../Interfaces/ProductList";
import ProductDescription from "../Interfaces/ProductDescription";
import Item from "../Interfaces/Item";

interface productProps {
  id: string;
}

interface Props extends RouteComponentProps<productProps> {
}

const ProductDetail = (props: Props) => {

  const id = props.match.params.id;

  const getProductDetails = () => axios.get<ProductDescription>(`http://localhost:3001/product/${id}/details`)

  let [productdetails, setProductDetails] = useState<ProductDescription>({productDetails: []})
  useEffect(() => {
    getProductDetails().then(res => {
      // setProductDetails(res.data)
      console.log(res.data)
    });
  }, []);


  return (
    // <h1>ProductDetail {id}</h1>
  <div>
    {productdetails.productDetails.map(product => {
      <div>{product.callback}</div>
    })}
  </div>
)
}

export default ProductDetail
