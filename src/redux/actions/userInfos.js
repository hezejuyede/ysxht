import * as actionTypes from '../../containers/userInfos'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}