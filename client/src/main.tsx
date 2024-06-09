import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./client/styles/css/all.min.css";

import "./client/styles/css/icofont.min.css";

import "./client/styles/css/sharp-regular.min.css";
import "./client/styles/css/sharp-solid.min.css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "react-toastify/dist/ReactToastify.css";
import "flag-icons/css/flag-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./client/styles/css/style.css";
import '../globals.css'
import '../public/css/style.css'

import { TalimProvider } from "./client/context/TalimContext.tsx";
import { store } from "./state/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <TalimProvider>
      <App />
    </TalimProvider>
  </Provider>
);
