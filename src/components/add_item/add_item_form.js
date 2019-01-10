import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddItemForm extends Component {
    renderInput(props){
        console.log('Render input Args:', props);
        return(
            <div className={`col ${props.size || 's12'}`}>
                <div className="input-field">
                    <input {...props.input} type="text"/>
                    <label> {props.label} </label>
                </div>
                <p className="red-text text-darken-2">{props.meta.touched && props.meta.error}</p>
            </div>
        )
    }

    handleAddItem=(values)=>{
        console.log("Add item form values", values)

        this.props.reset();
    }
    render(){
        console.log('Add Item Form Props:', this.props)
        const {handleSubmit, reset} = this.props;
        return(
            <form onSubmit={handleSubmit(this.handleAddItem)}>               
                <div className="row">
                     <Field name="title" size="s12 m8 offset-m2" component={this.renderInput} id="title" label="Title"/>                    
                </div>
                <div className="row">
                    <Field name="details" size="s12 m8 offset-m2" component={this.renderInput} id="details" label="Details"/>
                </div>

                <div className="row">
                    <div className="col s6 center">
                        <button onClick={reset} type="button" className="btn grey lighten-1">Reset Form</button>
                    </div>
                    <div className="col s6 center">
                        <button className="btn pink darken-2">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}

function validateForm(values){
    const {title, details} = values;
    const errors = {};

    if(!title){
        errors.title ='Must be a valid title ';
    }

    if(!details){
        errors.details = 'Please enter some details';
    }

    return errors;
}

export default reduxForm({
    form: 'add-item-form',
    validate: validateForm,
    initialValues: {
        title: 'This is the title',
        details: 'Enter details here'
    }
})(AddItemForm);
