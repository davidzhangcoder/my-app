import {
    GET_MAIN_DATA,
    GET_MAIN_DATA_TEST,
    GET_MAIN_DATA_LOADING,
    GET_HOT_KEY_LIST,
    GET_HOT_KEY_LIST_LOADING,
    SEARCH_LOADING,
    SEARCH_DONE
} from './action-types'
import {
    reqMainData,
    reqHotKeyList,
    reqSearch
} from '../api/ajax'

const sendDataToState = (type, data) => ({type, data})

export const getMainData = () => {
    return async dispatch => {
        dispatch(sendDataToState(GET_MAIN_DATA_LOADING,{}))
        const response = await reqMainData()
         console.log(response);
        const { data, status } = response;
        if( status === 200)
            dispatch(sendDataToState(GET_MAIN_DATA,data.data))
    }
}

export const getHotKeyList = () => {
    return async dispatch => {
        dispatch(sendDataToState(GET_HOT_KEY_LIST_LOADING,{}))
        const response = await reqHotKeyList()
         console.log(response);
        const { data, status } = response;
        if( status === 200)
            dispatch(sendDataToState(GET_HOT_KEY_LIST,data.data))
    }
}

export const search = (keyword) => {
    return async dispatch => {
        dispatch(sendDataToState(SEARCH_LOADING,{}))
        const response = await reqSearch(keyword)
         console.log(response);
        const { data, status } = response;
        if( status === 200)
            dispatch(sendDataToState(SEARCH_DONE,data.data))
    }
}

export const getMainDataTest = () => ({type:GET_MAIN_DATA_TEST, data:{}})