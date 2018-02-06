export default (state = {}, actions) => {
    switch(actions.type) {
        case 'OPEN_MODAL': {
            return {
                ...state,
                modalType: actions.modalType,
                onConfirm: actions.onConfirm,
                visibility: true,
                options: {...actions.options}
            }
        }
        case 'CLOSE_MODAL': {
            return {...state, visibility: false}
        }
        default: return state;
    }
}