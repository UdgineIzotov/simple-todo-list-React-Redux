import React from 'react'

import {Button, Input, Modal} from 'semantic-ui-react'

import './modal.css'

export const AddSubModal = ( { modalType, onConfirm, onClose, visibility } ) => {
    if (!visibility) { return null; }


    return <Modal closeIcon="close" open={true}>
        <Modal.Header>
            Add Sub Category
        </Modal.Header>
        <Modal.Content>
            <Input />
        </Modal.Content>
        <Modal.Actions>
            <Button positive onClick={onConfirm}>OK</Button>
            <Button secondary onClick={onClose}>Cansel</Button>
        </Modal.Actions>
    </Modal>
}