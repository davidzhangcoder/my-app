import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMainData, getMainDataTest } from '../redux/actions'
import MenuItem from '../component/menuitem/menu-item'
import "./main.css"

const Main = (props) => {

    const main = useSelector(state => {
        // console.log("main data", state.data)
        return state.data
    }
    );
    const dispatch = useDispatch();


    useEffect(() => {
        // dispatch(getMainDataTest())
        dispatch(getMainData())
    }, []);

    // console.log(Object.keys(main).length);
    if (main && Object.keys(main).length>0) {
        const { classify, menuBarData, menuBarData2, rotationImg, serviceData } = main
        // console.log(classify, menuBarData, menuBarData2, rotationImg, serviceData)
        // console.log(menuBarData.list1);
        return (
            <div className="menuBarData1">
                {
                    menuBarData.list1.map((item, index) => {
                        return (
                            <MenuItem
                                key={index}
                                imgUrl={item.picUrl}
                                title={item.type}
                            >
                            </MenuItem>
                        )
                    })
                }
            </div>
        )
    }
    else {
        return null;
    }
}

export default Main