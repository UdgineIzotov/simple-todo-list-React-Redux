/**
 * Created by Evhenii_Izotov on 2/7/2018.
 */
import React from 'react'
import { Switch, Route} from 'react-router-dom'

import MainPage from '../pages/main/main'
import EditPage from '../pages/edit/edit'

const routes = [
    {
        path: '/home',
        component: MainPage
    },
    {
        path: '/edit/:taskId',
        component: EditPage
    }
]

const defaultRoute = {
    path: '/',
    component: MainPage
}

export const getRoutes = () => (
    <Switch>
        {routes.map( (route, key) =>  (<Route key={key} path={route.path} component={route.component}/>) )}
        <Route exact path={defaultRoute.path} component={defaultRoute.component}/>
    </Switch>
);