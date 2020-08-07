import React, {lazy, Suspense, createElement} from 'react'
import {Switch, Route} from 'react-router-dom'
import {HomeProvider} from './conetexts/HomeContext'

import ROUTES from './constants/routes'

const Home = lazy(() => import('./pages/Home'))
const LazyIcon = lazy(() => import('./pages/LazyIcon'))

const AppCommonProvider = ({contexts, children}) =>
    contexts.reduce((prev, context) => createElement(context, {children: prev}), children)

function App() {
    return (
        <AppCommonProvider contexts={[HomeProvider]}>
            <Suspense fallback={<></>}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home} />
                    <Route exact path={ROUTES.LAZY_ICON} component={LazyIcon} />
                </Switch>
            </Suspense>
        </AppCommonProvider>
    )
}

export default App
