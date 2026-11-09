import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Deck } from "./deck/Deck";
import { Presenter } from "./deck/Presenter";

const isPresenter = new URLSearchParams(location.search).has("presenter");
document.title = isPresenter ? "Presenter · Meet the Editors" : "Meet the Editors";

createRoot(document.getElementById("root")!).render(
  <StrictMode>{isPresenter ? <Presenter /> : <Deck />}</StrictMode>,
);
