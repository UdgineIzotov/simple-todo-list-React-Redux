import React from 'react'

import {Button, Input, Modal} from 'semantic-ui-react'

import './modal.css'

export const AddSubModal = ( { modalType, onConfirm, onClose, visibility, options } ) => {
    if (!visibility) { return null; }

    let inputValue = '';

    const onChange = (e) => { inputValue = e.target.value };
    const confirm = () => {
        onConfirm({ parentId: options.parentId ,name: inputValue });
        onClose();
    };

    return <Modal closeIcon="close" open={true}>
        <Modal.Header>
            Add Sub Category
        </Modal.Header>
        <Modal.Content>
            <Input onChange={onChange} />
        </Modal.Content>
        <Modal.Actions>
            <Button positive onClick={confirm}>OK</Button>
            <Button secondary onClick={onClose}>Cansel</Button>
        </Modal.Actions>
    </Modal>
}

export const EditModal = ( { modalType, onConfirm, onClose, visibility, options } ) => {
    if (!visibility) { return null; }

    let inputValue = '';

    const onChange = (e) => { inputValue = e.target.value };
    const confirm = () => {
        onConfirm({ newName: inputValue, editId: options.id });
        onClose();
    };

    return <Modal closeIcon="close" open={true}>
        <Modal.Header>
           Edit Category
        </Modal.Header>
        <Modal.Content>
            <Input defaulValue={options.name} onChange={onChange} />
        </Modal.Content>
        <Modal.Actions>
            <Button positive onClick={confirm}>OK</Button>
            <Button secondary onClick={onClose}>Cansel</Button>
        </Modal.Actions>
    </Modal>
}

export const DeleteModal = ( { modalType, onConfirm, onClose, visibility, options } ) => {
    if (!visibility) { return null; }

    const confirm = () => {
        onConfirm({deleteId: options.deleteId});
        onClose();
    };

    return <Modal closeIcon="close" open={true}>
        <Modal.Header>
            Delete category
        </Modal.Header>
        <Modal.Content>
           Are you sure you want to delete category?
        </Modal.Content>
        <Modal.Actions>
            <Button positive onClick={confirm}>OK</Button>
            <Button secondary onClick={onClose}>Cansel</Button>
        </Modal.Actions>
    </Modal>
}