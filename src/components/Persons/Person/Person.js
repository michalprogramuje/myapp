import React, { Component, Fragment } from 'react';
import classes from "./Person.css";
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
            return (
                <Fragment>
                    <AuthContext.Consumer>
                        {(context) => {context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>} }}
                    </AuthContext.Consumer>
                <p onClick ={this.props.click}>To jest {this.props.name} i ma {this.props.age} lat</p>
                <p>{this.props.children}</p>
                <input 
                type= "text"
                // ref = {(inputEl) => {this.inputElement = inputEl}}
                ref = {this.inputElementRef}
                onChange = {this.props.changed} 
                value = {this.props.name} />
                </Fragment>
        );
}}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


export default withClass(Person, classes.Person);
