export default (state = {}, actions) => {
    console.log('modals work', actions);
    switch(actions.type) {
        case 'OPEN_MODAL': {

            return {
                ...state,
                modalType: actions.modalType,
                onConfirm: actions.onConfirm,
                visibility: true
            }
        }
        case 'CLOSE_MODAL': {
            return {...state, visibility: false}
        }
        default: return state;
    }
}