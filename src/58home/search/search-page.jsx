import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spin , Icon } from 'antd'
import 'antd/dist/antd.css';

import './search-page.css'
import { getHotKeyList, search } from '../redux/actions'
import SearchBox from './search-box'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const SearchPage = (props) => {

    const test = useSelector(state => state)
    console.log(test);

    let [searchKey, setSearchKey] = useState("");

    const hotKeyList = useSelector(state => state.search.hotKeyData.hot);
    const isHotKeyListLoading = useSelector(state => state.search.isLoadingHotKeyData);
    const dispatch = useDispatch();


    const dispatchHotKeyListAction = () => {
        dispatch(getHotKeyList())
    }

    const changeSelectedHotKey = (item) => {
        setSearchKey(item)
    }

    useEffect(() => {
        dispatchHotKeyListAction();
    }, []);

    useEffect(() => {
        // console.log("dispatchSearchAction: " , searchKey , searchKey && searchKey.trim())
        if (searchKey && searchKey.trim() != "") {
            dispatch(search(searchKey))
        }
    }
        , [searchKey])

    const renderHotKeyList = useCallback((hotKeyList, isHotKeyListLoading) => {
        // console.log("hotKeyList, isHotKeyListLoading",hotKeyList, isHotKeyListLoading, isHotKeyListLoading==true)

        // if (isHotKeyListLoading)
        //     return <div>
        //         <Spin />
        //     </div>
        // else
            return <div className="hot-key">
                {
                    isHotKeyListLoading?
                    <Spin indicator={antIcon}/> :
                    hotKeyList.map((item, index) => {
                        return <span className="hot-key-item" key={item} onClick={() => changeSelectedHotKey(item)}>{item}</span>
                    })
                }
            </div>
    }
        , []);

    return (<div>
        <SearchBox selectedSearchKey={searchKey} setSearchKey={setSearchKey}></SearchBox>
        {renderHotKeyList(hotKeyList, isHotKeyListLoading)}
        
        {/* <div style={{ width: '100%', height: '1000px', border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Spin style={{ width: "50px", height: "50px" }} />
        </div> */}
    </div>)

}

export default React.memo(SearchPage)

//有3个要checkin, 造数据, immuablejs, route, ctrip, login