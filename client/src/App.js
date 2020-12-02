import React, {lazy, Suspense, createElement} from 'react'
import {Switch, Route} from 'react-router-dom'
import {HomeProvider} from './conetexts/HomeContext'
import {SessionIoProvider} from './conetexts/SessionIoContext'

import ROUTES from './constants/routes'

const Home = lazy(() => import('./pages/Home'))
const LazyIcon = lazy(() => import('./pages/LazyIcon'))
const SessionIo = lazy(() => import('./pages/SessionIo'))
const Recoil = lazy(() => import('./pages/Recoil'))

const AppCommonProvider = ({contexts, children}) =>
    contexts.reduce((prev, context) => createElement(context, {children: prev}), children)

function App() {
    return (
        <AppCommonProvider contexts={[HomeProvider, SessionIoProvider]}>
            <Suspense fallback={<></>}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home} />
                    <Route exact path={ROUTES.LAZY_ICON} component={LazyIcon} />
                    <Route exact path={ROUTES.SESSION_IO} component={SessionIo} />
                    <Route exact path={ROUTES.RECOIL} component={Recoil} />
                </Switch>
            </Suspense>
        </AppCommonProvider>
    )
}

export default App
