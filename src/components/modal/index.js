import React, {Component} from 'react'

import { connect } from 'react-redux'
import { AddSubModal, EditModal, DeleteModal } from "./modals"

const mapStateToProps = store => store.modal;

class ModalContainer extends Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.dispatch( { type: 'CLOSE_MODAL' } );
    }

    render() {
        let modal = null;
        switch (this.props.modalType) {
            case 'DELETE_MODAL': {
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

export default connect(mapStateToProps)(ModalContainer)