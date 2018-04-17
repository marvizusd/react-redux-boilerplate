import React from 'react';

// We'll need to import all those action creators
import {
    unnamedAction1,
    unnamedAction2,
    unnamedAction3
} from './Actions'

export default class LocalOne extends React.Component {
    constructor(props) {
        super(props);

        this.handlerOne = this.handlerOne.bind(this)
    }

    handlerOne(){
        const { dispatch } = this.props 
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}