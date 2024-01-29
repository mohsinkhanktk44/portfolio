// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import store from "../store";
// import { Provider } from "react-redux";
// store.subscribe(() => {});
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "../store";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
