import React, { Component } from 'react';
import laoding from '../assets/loader.gif';

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={laoding} alt="Loading" />
            </div>
        )
    }
}
