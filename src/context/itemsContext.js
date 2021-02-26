import React from "react";
const ThemeContext = React.createContext({
  storeItems: [],
  setItems: () => {},
});
export default ThemeContext;
