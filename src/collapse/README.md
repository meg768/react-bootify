

#### Usage 

```js static
import {Collaspe} from 'react-bootify';
/* or */
import Collaspe from 'react-bootify/collaspe';
```


```js

class Sample extends React.Component  {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {};
        this.state.show = false;
    }

    toggle() {
        this.setState({show:!this.state.show});
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>Toggle</Button>
                <Collapse show={this.state.show} fade={true} timeout={350}>
                    <Card margin={{top:1}} >
                        <Card.Header>
                            Header
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Primary card title
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Collapse>
            </div>
        );
    }
};

<Sample/>

```

```js

class SampleX extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.show = false;
        this.state.type = 'primary';

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({show:!this.state.show});
    }

    onRadioChanged(event) {
        var state = {};
        state.type = event.target.id;
        this.setState(state);
    }

    render() {

        var textColor = {};
        textColor['primary']   = 'light';
        textColor['secondary'] = 'light';
        textColor['success']   = 'light';
        textColor['danger']    = 'light';
        textColor['info']      = 'light';
        textColor['light']     = 'dark';
        textColor['dark']      = 'light';

        return (
            <div>
                <Button onClick={this.toggle}>Toggle</Button>
                <Form margin={{top:1}}>
                    <Form.Row>
                       <Form.Col>
                            <Card padding={2}>
                                <Form.Radio id='primary' checked={this.state.type == 'primary'} onChange={this.onRadioChanged.bind(this)}>
                                    Primary
                                </Form.Radio>
                                <Form.Radio id='secondary' checked={this.state.type == 'secondary'} onChange={this.onRadioChanged.bind(this)}>
                                    Secondary
                                </Form.Radio>
                                <Form.Radio id='success' checked={this.state.type == 'success'} onChange={this.onRadioChanged.bind(this)}>
                                    Success
                                </Form.Radio>
                            </Card>
                        </Form.Col>

                        <Form.Col>
                            <Card padding={2}>
                                <Form.Radio id='danger' checked={this.state.type == 'danger'} onChange={this.onRadioChanged.bind(this)}>
                                    Danger
                                </Form.Radio>
                                <Form.Radio id='info' checked={this.state.type == 'info'} onChange={this.onRadioChanged.bind(this)}>
                                    Info
                                </Form.Radio>
                                <Form.Radio id='light' checked={this.state.type == 'light'} onChange={this.onRadioChanged.bind(this)}>
                                    Light
                                </Form.Radio>
                            </Card>
                        </Form.Col>
 
                    </Form.Row>

                    <Card margin={{top:2}} padding={2}>
                        <Form.Radio id='dark' checked={this.state.type == 'dark'} onChange={this.onRadioChanged.bind(this)}>
                                Dark
                        </Form.Radio>
                    </Card>
                </Form>
                <Collapse show={this.state.show} fade={true} timeout={1000}>
                    <Card margin={{top:1}} backgroundColor={this.state.type} textColor={textColor[this.state.type]}>
                        <Card.Header>
                            Header
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Primary card title
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Collapse>
            </div>
        );
    }
};

<SampleX/>

```