import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component{
    continue = e => {
        e.preventDefault();
        //Process FORM sending data to backend//
        this.props.nextStep();
        
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
        
    };
    render(){
        
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1> Thankyou for your submission</h1>
                   
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}



export default Success;