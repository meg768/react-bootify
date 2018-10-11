import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Container, Component, Row, Col, Popper, Button} from '../../../src/index.js';


function debug() {
    console.log.apply(null, arguments);
}




class DropdownSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.isOpen = false;
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({isOpen:!this.state.isOpen});
    }


    render() {
        var target = (
            <Button onClick={this.toggle}>
                {this.props.name}
            </Button>

        );

        return  (
            <Popper toggle={this.toggle} isOpen={this.state.isOpen} placement={this.props.placement} target={target}>
                <div className="dropdown-menu" >
                    <h3>Hej</h3>
                    <p>Olle</p>
                </div>
            </Popper>

        );

        return  (
            <Popper toggle={this.toggle} isOpen={this.state.isOpen} placement={this.props.placement} target={target}>
                <div className="dropdown-menu show" role='menu'>
                  <a className="dropdown-item" onClick={this.toggle}>Action</a>
                  <a className="dropdown-item" onClick={this.toggle}>Another action</a>
                  <a className="dropdown-item" onClick={this.toggle}>Something else here</a>
                </div>
            </Popper>

        );

    }


}



export default class Module extends React.Component {


    constructor(args) {

        super(args);

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={2}>
                        <DropdownSample name='Right Star' placement='right-start'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Left Start' placement='left-start'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Bottom' placement='bottom'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Bottom' placement='bottom'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Bottom Start' placement='bottom-start'/>
                    </Col>
                    <Col md={2}>
                        <DropdownSample name='Button End' placement='bottom-start'/>
                    </Col>
                </Row>
            </Container>
        );

    }
}