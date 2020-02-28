import React, { Component, Fragment } from 'react';
import classes from "./Person.css";
import withClass from '../../../hoc/WithClass'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
            return (
                <Fragment>
                <p onClick ={this.props.click}>To jest {this.props.name} i ma {this.props.age} lat</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value = {this.props.name} />
                </Fragment>
        );
}}
export default withClass(Person, classes.Person);
