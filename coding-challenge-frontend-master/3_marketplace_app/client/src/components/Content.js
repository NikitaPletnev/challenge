import React, {useEffect, useState} from "react";
import {goods} from "../goods";
import '../styles/content.css'

const Content = () => {

    const [goodsGet, setGoodsGet] = useState([]);

    useEffect(() => {
        setGoodsGet(goods)
    },[])

    const renderGoods = () => {
        if(!goodsGet.length){
            return null;
        }
        return goodsGet.map((opt) => {
            return (
                <div className='goodsItem'>
                    <img src={opt.imageUrl} alt='image not found'/>
                    <p>{opt.title}</p>
                    <p>{opt.description}</p>
                </div>
            )
        })

    }

    return (
        <div className='contentContainer'>
            {renderGoods()}
        </div>
    )
}

export default Content;
