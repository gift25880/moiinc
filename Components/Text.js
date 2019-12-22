import React, { Component } from 'react'

export const Header = (props) => {
    return(
        <h1 className={`${props.color}`}>
            { props.headerText }
        </h1>
    )
}

export const Header2 = (prop) => {
    return (
        <h4 className={`${props.color}`}>
            { props.headerText }
        </h4>
    )
}

export const Content = (props) => {
    return(
        <h5 className={`${props.color}`}>
            { props.content }
        </h5>
    )
}


