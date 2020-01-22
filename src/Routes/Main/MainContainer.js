import React from "react";
import MainPresenter from "./MainPresenter";

export default class extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const { searchTerm } = this.state;
    };

    render() {
        return (<MainPresenter />
        );
    }
}
