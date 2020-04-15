import React from 'react';
import './Modal.css'

export default class Modal extends React.Component {
    state ={
        isopen: false
    }
    render () {
        return (
            <React.Fragment>
                 <button onClick={ () => this.setState({isOpen: true})} >Open modal</button>
                {
                    this.state.isOpen && (
                       
                        <div className ='modal'>
                            <div className='modal-body'>
                                <h1> ModalTitle</h1>
                                <p>I am AWESOME</p>
                                <button onClick={ () => this.setState({isOpen: false})}>Close modal</button>
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}