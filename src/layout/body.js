import React from 'react';
import Index from '../post/index';
import {HashRouter, Route} from "react-router-dom";
import Login from '../auth/login';

export default function Body(){
    return (<div>
        <Index />
        <HashRouter >
            <Route exact path = "/" component = {Index}>
                {/* <IndexRoute component = {Index}></IndexRoute> */}
                <Route path = "/login" component = {Login}></Route>
            </Route>
        </HashRouter>
            
            </div>
    );
}