import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from '../components/partials/footer/Footer'
import Nav from '../components/partials/nav/Nav'
import Inicio from '../components/views/inicio/Inicio'


const PublicRoutes = ({...rest}) => {
    return (
        <div className="app">
            <Nav {...rest}/>
            <Switch>
            <Route exact path="/" component={Inicio} />
            {/* <Route path="/productos" component={Productos} />
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/contacto" component={Contacto} /> */}
            </Switch>
            <Footer/>
        </div>
    )
}

export default PublicRoutes
