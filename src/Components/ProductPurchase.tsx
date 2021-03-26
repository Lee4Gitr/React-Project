import React from "react";
import product from "../Interfaces/Product";
import {RouteComponentProps, useHistory, withRouter} from "react-router-dom";
import {
  Button,
  Box,
  Heading
} from "@chakra-ui/react";
import axios from "axios";
import {Formik} from "formik";
import * as Yup from "yup";
import {InputControl, SelectControl, SwitchControl} from "formik-chakra-ui";
import OrderCreate from "../Interfaces/OrderCreate";


interface InitialValues {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  customerEmail: string;
  number: number;
  type: string;
  contact: boolean;
  code: number;
  quantity: number;
}

const PurchaseProduct = (props: RouteComponentProps<{}, any, product>) => {

  let product = props.history.location.state;
  const history = useHistory();

  const handleOnSubmit = (values: InitialValues, actions: { setSubmitting: (arg0: boolean) => void; resetForm: () => void; }) => {

    let order: OrderCreate = {
      billingAddress: {
        addresses: [
          {
            street: values.street,
            city: values.city,
            state: values.state,
            zip: values.zip
          }
        ]
      },
      customerEmail: {
        email: values.customerEmail
      },
      customerName: {
        name: `${values.firstName} ${values.lastName}`
      },
      customerPhone: {
        phoneNumbers: [
          {
            number: values.number,
            contact: values.contact,
            type: values.type
          }
        ]
      },
      purchaseProducts: {
        PurchaseProducts: [
          {
            code: product.code, quantity: 1
          }
        ]
      },
      shippingAddress: {
        addresses: [
          {
            street: values.street,
            city: values.city,
            state: values.state,
            zip: values.zip
          }
        ]
      },
    };

    // I would probably pull this and every other api call out into a service, where I could just pass the mapped data
    axios({
      method: "POST",
      url: `http://localhost:3001/product/${product.code}/purchase`,
      data: order
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        console.log(response)
        history.push("/orderComplete", {product});
      })
      .catch(error => {
        console.error(error)
        actions.setSubmitting(false);
      });
  };

  const initialValues: InitialValues = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: 55555,
    customerEmail: "",
    number: 5555555,
    type: "",
    contact: true,
    code: product.code,
    quantity: 1

  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    street: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zip: Yup.number().required(),
    customerEmail: Yup.string().required(),
    number: Yup.number(),
    type: Yup.string().required(),
    contact: Yup.boolean(),
    code: Yup.number().required(),
    quantity: Yup.number().required()
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {/*For Simplicity, I'm just doing a billing and shipping form, but would have 2 separate forms in a real world situation*/}
      {({values, isSubmitting, handleChange, handleBlur, handleSubmit}) =>
        (
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form"
            onSubmit={handleSubmit as any}
          >
            <Heading as="h1" mb={4} size="lg">Billing and Shipping Information</Heading>
            <InputControl name="firstName" label="First Name"/>
            <InputControl name="lastName" label="Last Name"/>
            <InputControl name="street" label="Street"/>
            <InputControl name="city" label="City"/>
            <InputControl name="state" label="State"/>
            <InputControl name="zip" label="Zip"/>
            <InputControl name="customerEmail" label="Email"/>
            <InputControl name="number" label="Phone Number"/>
            <SelectControl
              name="type"
              selectProps={{placeholder: "Select phone type"}}
            >
              <option value="Cellphone">Cellphone</option>
              <option value="Landline">Landline</option>
            </SelectControl>
            <SwitchControl name="contact" label="Can we contact you at this number?"/>

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>

            {/*// Hidden product in post request*/}
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Box>
        )}

    </Formik>
  )
}

export default withRouter(PurchaseProduct)
