import React, {Component} from 'react'

import { connect } from 'react-redux'
import { AddSubModal, EditModal, DeleteModal } from "./modals"

const modalStore = store => store.modal;

@connect( (store) => store.modal)
class ModalContainer extends Component {
    constructor(props) {
        super(props);

        console.log('modal container',this.props)
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.dispatch( { type: 'CLOSE_MODAL' } );
    }

    render() {
        console.log('modal container',this.props)
        let modal = null;
        console.log(AddSubModal);
        switch (this.props.modalType) {
            case 'CONFIRM_MODAL': {
                modal = DeleteModal({ ...this.props, onClose: this.onClose });
                break;
            }
            case 'EDIT_MODAL': {
                modal = EditModal({ ...this.props, onClose: this.onClose });
                break;
            }
            case 'ADD_SUB_MODAL': {
                modal = AddSubModal({ ...this.props, onClose: this.onClose });
                break;
            }
            default: break;

        }
        return <div>{modal}</div>;
    }
}

export default connect(modalStore)(ModalContainer)