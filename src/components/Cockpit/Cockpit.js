import React, { useEffect }  from 'react';
import classes from "./Cockpit.css";

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
        alert('Saved data to cloud (nope)')
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        };
    })

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <=2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
        assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>No witam witam</h1>
            <p className={assignedClasses.join(' ')}>Serdecznie</p>
            <button
                className = {btnClass}
                onClick={props.clicked}>Show/Hide</button>
        </div>
    );
}
export default Cockpit;