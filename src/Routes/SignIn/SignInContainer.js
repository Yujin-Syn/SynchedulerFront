import React from "react";
import SignInPresenter from "./SignInPresenter";
import { history } from "react-router-dom";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: null, 
        };
    }

    handleChange = event => {
        event.preventDefault();
        const {target: {value}} = event;
    }

    handleSubmit = event => {
        event.preventDefault();
        const { history : { push }} = this.props;
        return push("/main");
    };

    render() {
        return <SignInPresenter handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>;
    }
}
