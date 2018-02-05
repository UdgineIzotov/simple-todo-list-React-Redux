import React, {Component} from 'react'

import { connect } from 'react-redux'
import { AddSubModal } from "./modals"

const modalStore = store => store.modal;

class ModalContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let modal = null;
        console.log(AddSubModal);
        switch (this.props.modalType) {
            case 'CONFIRM_MODAL': {
                break;
            }
            case 'EDIT_MODAL': {
                break;
            }
            case 'ADD_SUB_MODAL': {
                modal = AddSubModal(this.props);
                break;
            }
            default: break;

        }
        console.log(modal);
        return <div>{modal}</div>;
    }
}

export default connect(modalStore)(ModalContainer)