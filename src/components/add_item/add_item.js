import React, {Component} from 'react';
import NavButton from '../nav_button';
import AddItemForm from './add_item_form';


   
class AddItem extends Component {
    render(){
        return(
            <div>
                <h1 className="center">Add Item</h1>
                <NavButton color="deep-orange black-text"to="/">Back To List</NavButton>

                <AddItemForm/>
            </div>
        );
    }
}


export default AddItem;