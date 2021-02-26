import { getLanguage } from "../libs/language";
export default function getTexto(textoInput) {
  let response = "";

  if (getLanguage() == "en-US") {
    return textoInput;
  } else {
    return text[textoInput] != undefined ? text[textoInput] : textoInput;
  }
}
export let text = {
  "Log-out": "Cerrar Sesion",
  "All Categories": "Todas las Categorias",
  "Shop by Category": "Compra por Categoría",
  "Order Now": "Ordene Ahora",
  "Shop before you arrive and": "Shop before you arrive and",
  "get 10% off": "get 10% off",
  "items in your shopping cart": "productos en tu carrito de compras",
  "You have": "Tienes",
  "Recommendations for you": "Recomendaciones para ti",
  "Add to cart": "Agregar al carrito",
  "Inspired by your shopping history": "Inspired by your shopping history",
  "There are": "Hay",
  "items waiting for you to add them to your cart":
    "items waiting for you to add them to your cart",
  "View details": "View details",
  "Related Products": "Productos Relacionados",
  "Back to Top": "Back to Top",
  "Shop by Category": "Compra por categoría",
};
