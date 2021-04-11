import React from 'react';

import { BrowserRouter ,Switch, Route, Link } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import  Badges from '../pages/Badges';

 function App(){
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={home} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges" component={Badges} />                    
                </Switch>
            
        </BrowserRouter>
    );
}
export default App;

function home() {
 return(
    <ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/badges/new">New Badge</Link>
    </li>
    <li>
        <Link to="/badges">Badges</Link>
    </li>
</ul>
 );   
}