import { combineReducers } from 'redux'

import { GET_MAIN_DATA, GET_MAIN_DATA_TEST, GET_MAIN_DATA_LOADING,
    GET_HOT_KEY_LIST_LOADING, GET_HOT_KEY_LIST,
    SEARCH_LOADING, SEARCH_DONE
 } from './action-types'

const initialMain = {
    isLoading: true,
    data: {}
}

const initialSearch = {
    isLoadingHotKeyData: true,
    isLoadingSearchList: true,
    hotKeyData: {},
    searchList: {}
}

function main(state = initialMain, action) {
    // console.log("reducer main", action);
    switch (action.type) {
        case GET_MAIN_DATA_LOADING:
            return Object.assign({},initialMain)
        case GET_MAIN_DATA:
            return { data:{...action.data} , isLoading: false }
        case GET_MAIN_DATA_TEST:
            return { data:['test data from reducer'] }
        default:
            return state;
    }
}

function search(state = initialSearch, action) {
    // console.log("reducer search", action);
    switch ( action.type ) {
        case GET_HOT_KEY_LIST_LOADING:
            return Object.assign({},state,{isLoadingHotKeyData:true})
        case GET_HOT_KEY_LIST:
            return Object.assign({},state,{hotKeyData:{...action.data}, isLoadingHotKeyData:false})
        case SEARCH_LOADING:
            return Object.assign({},state,{isLoadingSearchList:true});
        case SEARCH_DONE:
            return Object.assign({},state,{searchList:{...action.data}, isLoadingSearchList:false})
        default:
            return state;
    }
}

// export default main;

export default combineReducers({
    main,
    search
})