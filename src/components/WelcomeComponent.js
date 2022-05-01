import React, {Component} from "react";
import "../styles/WelcomeComponent.css";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: true
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({title: false});
        }, 1000);
    }

    render() {
        return(
            <div className="d-flex vh-100 vw-100 welcome align-items-center justify-content-center">
                <div className="title-big-div">
                    <p className="title-welcome">Welcome.</p>
                </div>
            </div>
        );
    }
}

export default Welcome;