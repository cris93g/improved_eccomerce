import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Your_items from './Components/Your_Items/Your_items';
import Spec_item from './Components/Spec_item/Spec_item';
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Your_items} exact path="/youritems" />
		<Route component={Spec_item} exact path="/item/:id" />
	</Switch>
);
