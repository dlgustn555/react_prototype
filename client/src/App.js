import React, { lazy, Suspense, createElement } from "react";
import { Switch, Route } from "react-router-dom";
import { HomeProvider } from "./conetexts/HomeContext";

const Home = lazy(() => import("./pages/Home"));

const AppCommonProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) => createElement(context, { children: prev }),
    children
  );
function App() {
  return (
    <AppCommonProvider contexts={[HomeProvider]}>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </AppCommonProvider>
  );
}

export default App;
