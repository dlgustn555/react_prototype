import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default App;
