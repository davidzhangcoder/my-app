import axios from 'axios'

function ajax(url, data = {} , type = 'GET') {
    console.log(url,data)
    if( type === TYPES.GET ){
        return axios.get(url, {
            params: data
          })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
    else {
        return axios.post(url, data)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
}

const TYPES = {
    GET: 'GET',
    POST: 'POST'
}

const BASE_URL = 'http://101.37.116.167:9090';

export const reqMainData = () => {
    return ajax(BASE_URL +'/home/main')
}

export const reqHotKeyList = () => {
    return ajax(BASE_URL +'/hot')
}

export const reqSearch = (keyword) => {
    return ajax(BASE_URL +'/search', {keyword})
}