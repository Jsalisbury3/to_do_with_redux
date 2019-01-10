import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import { Route } from 'react-router-dom';
import AddItem from './add_item';
import List from './list';


const App = () => (
    <div className="container">
        <Route exact path="/" component={List}/>
        <Route path="/add-item" component={AddItem}/>
    </div>
);

export default App;
