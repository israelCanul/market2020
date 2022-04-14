import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams,
  // useRouteMatch,
} from "react-router-dom";
import { connect } from "react-redux";
import ThemeContext from "./context/itemsContext";
import {
  initConfig,
  fetchConfiguration,
  SetUserFromGenesis,
} from "./actions/index";
import { fetchCartItems } from "./actions/cartActions";

import { getLanguage } from "./libs/language";
import { getCookieForm } from "./libs/cookieManager";
import getURL from "./libs/Routes";

import "../scss/App.scss";


//hot loader
// import { hot } from "react-hot-loader";

//lazy imports
const Home = lazy(() => import(/* webpackPrefetch: true */ "./pages/home"));
const Detail = lazy(() => import(/* webpackPrefetch: true */ "./pages/detail"));
const Search = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/searchResult")
);
const SubCategories = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/categories_subcategories")
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
// const Notifications = lazy(() =>
//   import(/* webpackPrefetch: true */ "./components/notifications")
// );
const HistorialShopping = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/shoppingHistory")
);
const Header = lazy(() => import(/* webpackPrefetch: true */ "./pages/header"));
// const Footer = lazy(() => import(/* webpackPrefetch: true */ "./pages/footer"));
import { RoyalFooter } from "rrhelpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    let { items, config, categories } = props;
    this.state = {
      getCat: categories,
      datos: [],
      storeItems: items.length == 0 ? [] : items,
      queryParams: "",
      config: config,
      language: this.props.site.language,
    };
    this.setQParams = this.setQParams.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }
  setLanguage(lang) {
    this.setState({ language: lang });
  }
  setQParams(newQuery) {
    this.setState({ queryParams: newQuery });
  }
  componentDidMount() {
    this.props.initConfig(this.state.config);
    this.props.fetchConfiguration(this.state.config.WebSection);
    this.props.fetchCartItems(this.state.config);
    if (getCookieForm("user", getLanguage()) != "") {
      this.props.SetUserFromGenesis(getCookieForm("user", getLanguage()));
    }
  }
  render() {
    let value = {
      storeItems: this.state.storeItems,
      configuration: this.props.site.configuration,
      setItems: this.state.setItems,
      categories: this.state.getCat,
    };

    if (this.props.site.initialConfig && this.props.site.configuration) {
      return (
        <ThemeContext.Provider value={value}>
          <Router>
            <Suspense fallback={<IsLoading />}>
              <Header
                language={getLanguage()}
                datos={this.state.storeItems}
                setQP={this.setQParams}
                setLang={this.setLanguage}
                cat={this.state.getCat}
              />
              <Switch>
                <Route exact path={getURL("/")}>
                  <Home site={this.props.site} cart={this.props.cart} />
                </Route>
                <Route exact path={getURL("/s")}>
                  <Search
                    QP={this.state.queryParams}
                    items={this.state.storeItems}
                  />
                </Route>
                <Route exact path={getURL("/shopping-history")}>
                  <HistorialShopping site={this.props.site} />
                </Route>
                <Route exact path={getURL("/cart-items")}>
                  <CartItems items={this.state.storeItems} />
                </Route>
                <Route exact path={getURL("/products")}>
                  <Categories cat={this.state.getCat} />
                </Route>
                <Route exact path={getURL("/products/:producto")}>
                  <Detail
                    site={this.props.site}
                    items={this.state.storeItems}
                  />
                </Route>
                <Route exact path={getURL("/categories")}>
                  <div>categorias</div>
                  {/* <Categories cat={this.state.getCat} /> */}
                </Route>
                <Route exact path={getURL("/categories/:id")}>
                  <Categories cat={this.state.getCat} />
                </Route>
                <Route exact path={getURL("/categories/:id/:subid")}>
                  <SubCategories cat={this.state.getCat} />
                </Route>
                <Route component={NotFound} />
              </Switch>
              <BacktoTop />

              <RoyalFooter
                style={{ backgroundColor: "#579c02" }}
                language={getLanguage()}
              />
            </Suspense>
          </Router>
        </ThemeContext.Provider>
      );
    } else {
      return <IsLoading />;
    }
  }
}
const NotFound = () => {
  return (
    <div id="root">
      <div className="App">
        <div className="NotFound">
          <p>
            Not Found - <span>404</span>
          </p>
        </div>
      </div>
    </div>
  );
};
const IsLoading = () => {
  return (
    <div className="loadingSite">
      <img src="/img/logo_market.png" alt="Logo Royal Market" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    site: state.site,
    cart: state.cart,
  };
};
export default /*hot(module)(*/
  connect(mapStateToProps, {
    initConfig,
    fetchCartItems,
    fetchConfiguration,
    SetUserFromGenesis,
  })(App);
//);
