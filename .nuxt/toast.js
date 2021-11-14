import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"E:\\RabinCash\\RabinCash-v5-FrontEnd\\node_modules\\vue-toastification\\dist\\index.css","timeout":5000,"closeOnClick":false,"position":"bottom-right","rtl":true,"pauseOnFocusLoss":false});
  inject('toast', toast);
}
