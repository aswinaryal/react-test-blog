import React from 'react';
import {Switch, Route } from 'react-router-dom';
import PostIndex from '../post/index'
import ContactIndex from '../contact/index';
import AuthIndex from '../auth/index';
import AboutIndex from '../about/index';
import ShowPost from '../post/showpost';

export default function Body(){
    return (<div>
                <Switch>
                    <Route exact path = "/" component = {PostIndex} ></Route>
                    <Route path = "/contact" component = {ContactIndex}></Route>
    <Route path = "/post/:post_id"  component={ShowPost} />
                    <Route path = "/about" component = {AboutIndex}></Route>
                    <Route path = "/auth" component = {AuthIndex}></Route>
                </Switch>
            </div>
        );
}