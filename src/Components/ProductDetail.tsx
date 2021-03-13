import React, {useCallback, useEffect, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import axios from "axios";
import ProductDescription from "../Interfaces/ProductDescription";
import {Badge, Box, Container} from "@chakra-ui/react";
import Product from "../Interfaces/Product";
import PurchaseButtons from "./PurchaseButtons";

interface productProps {
  id: string;
}

interface Props extends RouteComponentProps<productProps> {
}

const ProductDetail = (props: Props) => {

  const id = props.match.params.id;

  const getProductDetails = useCallback(() => axios.get<ProductDescription>(`http://localhost:3001/product/${id}/details`), [id])
  const getProduct = useCallback(() => axios.get<Product>(`http://localhost:3001/product/${id}`), [id])

  let [productDetails, setProductDetails] = useState<ProductDescription>({productDetails: []})
  let [product, setProduct] = useState<Product>({code: -1, cost: "", description: "", inventory: 0, name: ""})
  let [isPurchasable, setIsPurchasable] = useState<Boolean>(false)

  useEffect(() => {
    getProductDetails().then(res => {
      setProductDetails(res.data)
    });
    getProduct().then(res => {
      setProduct(res.data)
      console.log(res.data.inventory)
      setIsPurchasable(true)
    })
  }, [getProductDetails, getProduct, isPurchasable, product.inventory]);


  return (
    <Container>
      {productDetails.productDetails.map(details => (
        <Box key={details.code} maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {details.category.name} &amp; {details.category.type}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {details.productType.type} beds &bull; {details.productType.typeName}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {details.name}
            </Box>

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {details.cost}
            </Box>
            <Box color="teal.500">
              {details.pushedProduct ? "Only for a limited time!" : ""}
            </Box>
            <Box mt="2">
              {product.inventory > 0 ? <PurchaseButtons product={product}/> : null}
            </Box>
          </Box>
        </Box>
      ))}
    </Container>
  )
}

export default ProductDetail
