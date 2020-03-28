import React, { Component } from "react";

class GenericComponent extends Component {
    constructor() {
        super();
        this.state = {
            message: "Whazzup?"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({});
    }
    render() {
        return (
          <div>{this.state.message}</div>
        )
    }
}

export default GenericComponent;