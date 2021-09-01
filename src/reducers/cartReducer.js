import {
  SETLOADCART,
  FETCHCART,
  SETCARTITEM,
  DELETECARTITEM,
  SETITEMTOSESSION,
  OPENLOADER,
  RESETCARTITEM,
} from "../actions/cartActions";
const INITIAL_STATE = { itemsCart: [], isShowed: false, loader: false };

export default function (state = INITIAL_STATE, action) {
  let newState = state;
  switch (action.type) {
    case SETLOADCART:
      newState = { ...state, isShowed: action.payload };
      break;
    case SETCARTITEM:
      let newListItemsCart = state.itemsCart;
      let newItemToCart = action.payload.item;
      let Exist = false;
      let cantidad = 0;
      priceFetch = 0;
      state.itemsCart.map((item) => {
        if (item.item.SItemCode == newItemToCart.SItemCode) {
          Exist = true;
          if (action.payload.onList == true) {
            if (item.item.YnAllowFractionalSale == true) {
              item.totalItems =
                parseFloat(item.totalItems) +
                parseFloat(action.payload.totalItems);
            } else {
              item.totalItems += parseInt(action.payload.totalItems);
            }
          } else {
            item.totalItems = action.payload.totalItems;
          }
        }
        cantidad = cantidad + 1;
        priceFetch +=
          parseFloat(item.totalItems) * parseFloat(item.item.DPrice).toFixed(1);
      });

      if (!Exist) {
        newListItemsCart.push(action.payload);
        cantidad = cantidad + 1;
        priceFetch +=
          parseFloat(action.payload.totalItems) *
          parseFloat(action.payload.item.DPrice).toFixed(1);
      }
      if (cantidad == 0) {
        cantidad = 1;
      }
      localStorage.setItem(
        "cart",
        window.btoa(JSON.stringify(newListItemsCart))
      );
      newState = {
        ...state,
        itemsCart: newListItemsCart,
        itemsCount: cantidad,
        totalPrice: parseFloat(priceFetch).toFixed(2),
      };
      break;

    case DELETECARTITEM:
      let codeItem = action.payload;
      let newArray = [];
      let cant = 0;
      let price = 0;
      state.itemsCart.map((item) => {
        if (item.item.SItemCode != codeItem) {
          newArray.push(item);
          cant = cant + 1;
          price +=
            parseFloat(item.totalItems) *
            parseFloat(item.item.DPrice).toFixed(1);
        }
      });
      localStorage.setItem("cart", window.btoa(JSON.stringify(newArray)));
      newState = {
        ...state,
        itemsCart: newArray,
        itemsCount: cant,
        totalPrice: price,
      };
      break;
    case RESETCARTITEM:
      // let newArray = [];
      // let cant = 0;
      // let price = parseFloat(0.0).toFixed(1);
      // state.itemsCart.map((item) => {
      //   if (item.item.SItemCode != codeItem) {
      //     newArray.push(item);
      //     cant = cant + 1;
      //     price +=
      //       parseFloat(item.totalItems) *
      //       parseFloat(item.item.DPrice).toFixed(1);
      //   }
      // });
      localStorage.setItem("cart", window.btoa(JSON.stringify([])));
      newState = {
        ...state,
        itemsCart: [],
        itemsCount: cant,
        totalPrice: parseFloat(0.0).toFixed(1),
      };
      break;
    case FETCHCART:
      let iniConfig = action.payload;
      let count = 0;
      let priceFetch = 0;
      let itemsCart = [];
      let lan = iniConfig.Lan;
      let cart = [];
      if (localStorage.getItem("cart")) {
        itemsCart = JSON.parse(window.atob(localStorage.getItem("cart")));
        itemsCart.map((item) => {
          count = count + 1;
          priceFetch +=
            parseFloat(item.totalItems) *
            parseFloat(item.item.DPrice).toFixed(1);
        });
      }
      newState = {
        ...state,
        ini: iniConfig,
        itemsCart: itemsCart,
        itemsCount: count,
        totalPrice: parseFloat(priceFetch).toFixed(2),
      };
      break;
    case OPENLOADER:
      newState = { ...state, loader: action.payload };
      break;
    case SETITEMTOSESSION:
      let error = "";
      if (parseInt(action.payload) == 1) {
        // window.location = action.apiServer + "Shopping/InformationPay";
        newState = { ...state, errorOnCheckout: false, loader: false };
      } else {
        error = action.apiServer;
        newState = {
          ...state,
          errorOnCheckout: true,
          errorMessage: error,
          loader: true,
        };
      }
      // newState = { ...state, errorOnCheckout: error, loader: false };
      break;
    default:
      newState = state;
  }

  return newState;
}
