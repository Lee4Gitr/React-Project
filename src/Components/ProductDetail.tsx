import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface productProps {
  id: string;
}

interface Props extends RouteComponentProps<productProps> {
}

const ProductDetail = (props:Props) => {


  const id = props.match.params.id;

  return (
    <h1>ProductDetail {id}</h1>
  )
}

export default ProductDetail
