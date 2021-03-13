import './App.css';
import {Switch, Route} from "react-router";
import ProductListing from "./Components/ProductListing";
import ProductDetail from "./Components/ProductDetail";
import ProductPurchase from "./Components/ProductPurchase";
import PurchaseComplete from "./Components/PurchaseComplete";
import {Container} from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl">
      <Switch>
        <Route path="/purchase" component={ProductPurchase}/>
        <Route path="/product/:id" component={ProductDetail}/>
        <Route path="/product" component={ProductListing}/>
        <Route path="/orderComplete" component={PurchaseComplete}/>
        <Route path="/" component={ProductListing}/>
      </Switch>
    </Container>
  );
}

export default App;
