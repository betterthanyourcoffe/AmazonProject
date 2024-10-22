import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";

/*new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*

loadProductsFetch().then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

async function render() {
  await loadProductsFetch();
  renderOrderSummary();
  renderPaymentSummary();
}

render();
