import { getLanguage } from "../libs/language";

var textos = {};

export default function getTexto(textoInput) {
  let response = "";
  if (getLanguage() == "en-US") {
    return textoInput;
  } else {
    return textos[textoInput] != undefined ? textos[textoInput] : textoInput;
  }
}

export function setTextToTraslateTool(textResp) {
  textos = {};
  textos = textResp;
}

// export let text = {
//   Hello: "Hola",
//   "Log-out": "Cerrar Sesión",
//   "Log out": "Cerrar Sesión",
//   "log In": "Iniciar Sesión",
//   "All Categories": "Todas las Categorías",
//   "Shop by Category": "Compra por Categoría",
//   "Order Now": "Ordene Ahora",
//   "Shop before you arrive and": "Compra antes de llegar y",
//   "get 10% off": "obtén 10% de descuento",
//   "items in your shopping cart": "productos en tu carrito de compras",
//   "You have": "Tienes",
//   "Recommendations for you": "Recomendaciones para ti",
//   "Add to cart": "Agregar al carrito",
//   "Inspired by your shopping history": "Inspirado en tu historial de compras",
//   "There are": "Hay",
//   "items waiting for you to add them to your cart":
//     "Productos esperando ser agregados a tu carrito",
//   "View details": "Ver Detalles",
//   "Related Products": "Productos Relacionados",
//   "Back to Top": "Regreso al Inicio",
//   "Shop by Category": "Compra por Categoría",
//   "Minimum purchase of": "Compra mínima de",
//   "items or in groups of": "artículos o en grupos de",
//   Quantity: "Cantidad",
//   discount: "Descuento",
//   Subtotal: "Subtotal",
//   Total: "Total",
//   items: "producto(s)",
//   "Add to Cart": "Agregar al carrito",
//   "Save for Later": "Guardar para más tarde",
//   "Unit price": "Precio Unitario",
//   Code: "Código",
//   Brand: "Marca",
//   "About this Item": "Acerca de este producto",
//   "This Item doesn´t exist": "Este producto no existe",
//   "Proceed to checkout": "Pasar a la caja",
//   "Schedule delivery to villa": "Programar entrega a la villa",
//   "Shopping cart": "Carrito de compras",
//   "Your Account": "Tu Cuenta",
//   "Items in your cart": "Productos en tu carrito",
//   "Shopping history": "Historial de compra",
//   "Log out": "Cerrar sesión",
//   "Categories of the day": "Categorías del día",
//   "Summary & Delivery": "Resumen y Entrega",
//   Confirmation: "Confirmación",
//   "Item updated in cart": "Producto actualizado en el carrito",
//   "Item added to cart": "Producto agregado al carrito",
//   "In order to give you a better experience please":
//     "Para brindarte una mejor experiencia, favor",
//   "(with your member account)": "(con tu cuenta de socio)",
//   "Retrieve it here": "Recupéralo aquí",
//   "Our recommendation for you": "Nuestra recomendación para ti",
//   Hi: "Hola",
//   or: "o",
//   "Show More": "Mostrar más",
// };
