import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function changeAdd (state = initialState, action) {
    switch (action.type) {
        case 'CLOSE':
            return action.data
        case 'OPEN':
            return action.data
        default:
            return state
    }
}