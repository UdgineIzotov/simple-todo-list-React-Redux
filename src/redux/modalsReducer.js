export default (state = {}, actions) => {
    console.log('modals work', actions);
    switch(actions.type) {
        case 'OPEN_MODAL': {

            return {
                ...state,
                modalType: actions.modalType,
                onModalConfirm: actions.onModalConfirm,
                visibility: actions.isVisible
            }
        }
        case 'CLOSE_MODAL': {
            return {...state, visibility: actions.isVisible}
        }
        default: return state;
    }
}