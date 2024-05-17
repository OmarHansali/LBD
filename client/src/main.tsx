import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/all.min.css";
import "./styles/css/icofont.min.css";
import "./styles/css/sharp-regular.min.css";
import "./styles/css/sharp-solid.min.css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "react-toastify/dist/ReactToastify.css";
import "flag-icons/css/flag-icons.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/css/style.css";

import { TalimProvider } from "./context/TalimContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TalimProvider>
    <App />
  </TalimProvider>
);
