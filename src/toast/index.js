import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { isObject, isNumber, isString, isBoolean } from 'util';
import Tag from '../tag';
import Fade from '../fade';


export default function Toast(props) {

    var {show, children, className, tag, ...props} = props;

    className = classNames(className, 'toast');

    return (
        <Fade show={show}>
            <Tag tag={tag} role="alert" aria-live="assertive" aria-atomic="true"  className={className} {...props} >
                {children}
            </Tag>
        </Fade>

    );
};

Toast.defaultProps = {
    tag       : 'div',
    show      : 'true'
};

Toast.Header = function(props) {

    var {children, title, subtitle, dismiss, ...props} = props;

    var dismissButton = (
        <button type="button" className="ml-2 mb-1 close" onClick={dismiss} aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    );


    return (
        <Tag className='toast-header' {...props}>
            {title ? <strong className="mr-auto">{title}</strong> : undefined}
            {subtitle ? <small className="text-muted">{subtitle}</small> : undefined}
            {dismiss ? dismissButton : undefined}
            {children}
        </Tag>
    );

}

Toast.Title = function(props) {

    var {tag, children, ...props} = props;

    return (
        <Tag tag="strong" className="mr-auto" {...props}>
            {children}
        </Tag>

    );
}



Toast.Body = function(props) {

    var {children, ...props} = props;

    return (
        <Tag className='toast-body'>
            {children}
        </Tag>
    );

}

