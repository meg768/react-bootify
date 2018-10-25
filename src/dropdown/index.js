import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import classNames from 'classnames';
import PopperJs from 'popper.js';
import Fade from '../fade';
import Tag from '../tag';


function debug() {
    console.log.apply(null, arguments);
}

export default class Dropdown extends React.Component {

    constructor(args) {
        super(args);

        this.state = {};
        this.state.popper = null;
        this.state.isOpen = false;

        this.popper     = null;
        this.targetNode = null;
        this.dropdownNode  = null;

        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onTargetClick = this.onTargetClick.bind(this);

    }

    static propTypes = {
        target: PropTypes.any
    };

    static defaultProps = {
        tag       : 'div',
        target    : null,
        placement : 'bottom-start',
        modifiers : {
            preventOverflow: {
                boundariesElement: 'viewport',
            }
        }
    }


    componentDidMount() {
    }

    componentWillUnmount() {
        this.destroyPopper();
    }

    onDocumentClick(event) {

        if (this.state.isOpen) {

            console.log('target', event.target);

            if (this.targetNode.contains(event.target)) {
                console.log('Inside target', event.target);
            }
            else if (this.dropdownNode.contains(event.target)) {
                console.log('Inside dropdown', event.target);
                this.hidePopper();
                
            }

            else  {
                console.log('Both outside target and dropdown', event.target);
                this.hidePopper();
            }

        }
    }


    onTargetClick(event) { 
        console.log('Target click');
        this.togglePopper();
    }

    createPopper() {

        if (this.popper == null) {
            document.addEventListener('click', this.onDocumentClick, true);

            var options = {
                placement : this.props.placement,
                modifiers : this.props.modifiers,
                onCreate  : (state) => {this.setState({popper:state})},
                onUpdate  : (state) => {this.setState({popper:state})}
    
            };
    
            this.popper = new PopperJs(this.targetNode, this.dropdownNode, options);
            this.updatePopper();
        }
    }

    destroyPopper() {
        if (this.popper) {
            document.removeEventListener('click', this.onDocumentClick, true);
            this.popper.destroy();
        }

        this.popper = null;

    }


    togglePopper() {
        if (this.state.isOpen)
            this.hidePopper();
        else
            this.showPopper();
    }

    showPopper() {
        this.createPopper();
        this.setState({isOpen:true});
    }

    hidePopper() {
        this.destroyPopper();
        this.setState({isOpen:false});
    }

    updatePopper() {
        requestAnimationFrame(() => {
            if (this.popper) {
                this.popper.update();
            }
        });
    }


    getChildOfType(type) {
        return React.Children.toArray(this.props.children).find((child) => {
            return child.type === type;
        })
    }

    getTarget() {
        var target = null;

        if (this.props.target)
            target = this.props.target;
        else {
            var dropdownTarget = this.getChildOfType(Dropdown.Target);
            
            if (dropdownTarget)
                target = dropdownTarget.props.children;
        }

        return target;
    }


    getMenu() {
        return this.getChildOfType(Dropdown.Menu);
    }


    renderTarget() {
        var target = this.getTarget();
        var style = Object.assign({}, target.props.style, {cursor:'pointer'});

        return (React.cloneElement(target, {style:style, onClick:this.onTargetClick, ref:(element) => {this.targetNode = ReactDOM.findDOMNode(element)}}));
    }

    renderMenu() {
        var menu = this.getMenu();
        return (React.cloneElement(menu, {isOpen:this.state.isOpen, ref:(element) => {this.dropdownNode = ReactDOM.findDOMNode(element)}}));
    }


    render() {
        var {tag, _name, placement, modifiers, isOpen, toggle, dismiss, ...props} = this.props;

        return (
            <Tag tag={tag} {...props}>
                {this.renderTarget()}
                {this.renderMenu()}
            </Tag>
        );

    }
}




Dropdown.Target = class extends React.Component {

    render() {

        return (
            this.props.children
        );

    }
}


Dropdown.Menu = class extends React.Component {


    static propTypes = {
        isOpen : PropTypes.bool
    };


    static defaultProps = {
        tag : 'div',
        isOpen : false
    };

    render() {

        var {tag, isOpen, className, ...props} = this.props;

        className = classNames(className, 'dropdown-menu');

        return (
            <Fade show={isOpen}>
                <Tag tag={tag} className={className} {...props}/>
            </Fade>
        );

    }
}




Dropdown.Item = class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var {tag = 'div', style, className, ...other} = this.props;

        className = classNames(className, 'dropdown-item');
        style = Object.assign({}, style, {cursor:'pointer'});


        return (
            <Tag tag={tag} tabIndex={1} style={style} className={className} {...other}/>
        );
    
    }
}

Dropdown.Separator = function(props) {

    var {tag = 'div', className, ...other} = props;

    className = classNames(className, 'dropdown-divider');

    return (
        <Tag tag={tag} className={className} {...other}/>
    );
}

