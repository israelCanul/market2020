import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { connect } from "react-redux";
import { getCategories } from "./libs/api";
import ThemeContext from "./context/itemsContext";
import { initConfig } from "./actions/index";
import { fetchCartItems } from "./actions/cartActions";
import { NotificationContainer } from "react-notifications";

import "../scss/App.scss";
import "react-notifications/lib/notifications.css";

//hot loader
import { hot } from "react-hot-loader";

//lazy imports
const Home = lazy(() => import(/* webpackPrefetch: true */ "./pages/home"));
const Detail = lazy(() => import(/* webpackPrefetch: true */ "./pages/detail"));
const Search = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/searchResult")
);
const Categories = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/categories")
);
const BacktoTop = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/backtotop")
);
const CartItems = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/cartItems")
);
const Header = lazy(() => import(/* webpackPrefetch: true */ "./pages/header"));
const Footer = lazy(() => import(/* webpackPrefetch: true */ "./pages/footer"));

class App extends React.Component {
  constructor(props) {
    super(props);
    let { items, config, initConfig, site } = props;
    this.state = {
      getCat: getCategories(),
      datos: [],
      storeItems: items.length == 0 ? datos : items,
      queryParams: "",
      config: config,
    };
    this.setQParams = this.setQParams.bind(this);
  }
  setQParams(newQuery) {
    this.setState({ queryParams: newQuery });
  }
  componentDidMount() {
    this.props.initConfig(this.state.config);
    this.props.fetchCartItems(this.state.config);
  }
  render() {
    let value = {
      storeItems: this.state.storeItems,
      setItems: this.state.setItems,
    };
    if (this.props.site.initialConfig) {
      return (
        <ThemeContext.Provider value={value}>
          <Router>
            <Suspense fallback="Loading">
              <Header
                datos={this.state.storeItems}
                setQP={this.state.setQParams}
                cat={this.state.getCat}
              />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/s">
                  <Search
                    QP={this.state.queryParams}
                    items={this.state.storeItems}
                  />
                </Route>
                <Route exact path="/cart-items">
                  <CartItems />
                </Route>
                <Route exact path="/products">
                  <Categories cat={this.state.getCat} />
                </Route>
                <Route exact path="/products/:producto">
                  <Detail items={this.state.storeItems} />
                </Route>
                <Route exact path="/categories">
                  <Categories cat={this.state.getCat} />
                </Route>
                <Route exact path="/categories/:id">
                  <Categories cat={this.state.getCat} />
                </Route>
                <Route exact path="/categories/:id/:subid">
                  <Categories cat={this.state.getCat} />
                </Route>
              </Switch>
              <BacktoTop />
              <NotificationContainer />
              <Footer />
            </Suspense>
          </Router>
        </ThemeContext.Provider>
      );
    } else {
      return <IsLoading />;
    }
  }
}
const IsLoading = () => {
  return <div>Is Loading</div>;
};
const mapStateToProps = (state) => {
  return {
    site: state.site,
    cart: state.cart,
  };
};
export default hot(module)(
  connect(mapStateToProps, { initConfig, fetchCartItems })(App)
);
