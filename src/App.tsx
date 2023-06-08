import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./app/rootStore";
import Loader from "./components/common/Loader";

const RoutesApp = React.lazy(() => import("./routes/index.routes"));

export function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <RoutesApp />
      </Suspense>
    </Provider>
  );
}

export default App;
