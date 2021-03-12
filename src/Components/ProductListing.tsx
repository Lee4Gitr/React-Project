import React, {useEffect, useState} from "react";
import ProductList from "../Interfaces/ProductList";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom";
import {Link} from "@chakra-ui/react"
import axios from "axios";

export default function ProductListing() {

  const getProducts = () => axios.get<ProductList>("http://localhost:3001/product")

  let [productList, setProductList] = useState<ProductList>({products:[]})
  useEffect(() => {
    getProducts().then(res => {
      setProductList(res.data)
    });
  }, []);

  return (
  // <h1>Test</h1>
    <Table variant="striped" colorScheme="blackAlpha" size="sm">
      <TableCaption>Products</TableCaption>
      <Thead>
        <Tr>
          <Th>Purchase</Th>
          <Th>Code</Th>
          <Th>Name</Th>
          <Th>Description</Th>
          <Th isNumeric>Cost</Th>
          <Th isNumeric>Inventory</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          productList.products.map((product, i) => (

            <Tr key={i}>
              <Td><Link as={RouterLink} to={`/product/${product.code}`}>Purchase</Link></Td>
              <Td>{product.code}</Td>
              <Td>{product.name}</Td>
              <Td>{product.description}</Td>
              <Td>{product.cost}</Td>
              <Td>{product.inventory}</Td>
            </Tr>

          ))
        }
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Purchase</Th>
          <Th>Code</Th>
          <Th>Name</Th>
          <Th>Description</Th>
          <Th isNumeric>Cost</Th>
          <Th isNumeric>Inventory</Th>
        </Tr>
      </Tfoot>
    </Table>

  )
}

