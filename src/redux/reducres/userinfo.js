import * as actionTypes from '../../containers/userInfos'

const initialState = {};
export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data;
        default:
            return state

    }
}