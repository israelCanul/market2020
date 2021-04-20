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
  Hello: "Hola",
  "Log-out": "Cerrar Sesion",
  "Log out": "Cerrar Sesion",
  "log In": "log In",
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
  "Minimum purchase of": "Compra mínima de",
  "items or in groups of": "artículos o en grupos de",
  Quantity: "Cantidad",
  discount: "discount",
  Subtotal: "Subtotal",
  Total: "Total",
  items: "items",
  "Add to Cart": "Agregar al carro",
  "Save for Later": "Guardar para más tarde",
  "Unit price": "Precio Unitario",
  Code: "Código",
  Brand: "Marca",
  "About this Item": "Acerca este producto",
  "This Item doesn´t exist": "Este producto no existe",
  "Proceed to checkout": "Proceed to checkout",
  "Schedule delivery to villa": "Schedule delivery to villa",
  "Shopping cart": "Shopping cart",
  "Your Account": "Tu Cuenta",
  "Items in your cart": "Items in your cart",
  "Shopping history": "Shopping history",
  "Log out": "Log out",
  "Categories of the day": "Categories of the day",
  "Summary & Delivery": "Summary & Delivery",
  Confirmation: "Confirmation",
  "Item updated in cart": "Item updated in cart",
  "Item added to cart": "item added to cart",
};
