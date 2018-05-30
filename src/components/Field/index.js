import React from 'react';

export const MyInput = props => {
    return (
        <input {...props.input} type={props.type} placeholder={props.placeholder} />
    );
};