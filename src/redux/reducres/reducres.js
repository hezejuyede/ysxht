import * as actionTypes from '../constants/constants'


const initialState = {
    iconState:true
};
export default function userinfo(state= initialState , action) {
    switch (action.type) {
        case actionTypes.ICON_LIFT:
            return action.data;
        case actionTypes.ICON_RIGHT:
            return action.data;
        default:
            return state

    }
}
