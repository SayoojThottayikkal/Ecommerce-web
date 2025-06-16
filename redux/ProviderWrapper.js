"use client";

import { Provider } from "react-redux";
import { store } from "./store/Store";

export default function ProviderWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
