import {Button, Link, LinkOverlay, Stack} from "@chakra-ui/react";
import React from "react";
import Product from "../Interfaces/Product";
import {Link as RouterLink} from "react-router-dom";


interface Props {
  product: Product;
}

const PurchaseButtons = (props: Props) => {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Link as={RouterLink} to={`/purchase`}>
        <Button colorScheme="teal" variant="solid">
          Purchase {props.product.name}
        </Button>
      </Link>
      <Link as={RouterLink} to={`/product`}>
        <Button colorScheme="teal" variant="solid">
          Back
        </Button>
      </Link>
      {/*Implement Later*/}
      <Button isDisabled={true} colorScheme="teal" variant="outline">
        Add to Cart
      </Button>
    </Stack>
  )
}
export default PurchaseButtons
