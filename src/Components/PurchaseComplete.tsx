import React from "react";
import {Link as RouterLink, useHistory} from "react-router-dom";
import {Box, Button, Heading, Link, Stack} from "@chakra-ui/react";

const PurchaseComplete = () => {
  const history = useHistory()

  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={800}
      p={6}
      m="10px auto"
    >
      <Heading as="h1" mb={4} size="lg">Purchase Complete!</Heading>
      <Link as={RouterLink} to={`/`}>
        <Button colorScheme="teal" variant="solid">
          Back
        </Button>
      </Link>
    </Box>
  )
}

export default PurchaseComplete
