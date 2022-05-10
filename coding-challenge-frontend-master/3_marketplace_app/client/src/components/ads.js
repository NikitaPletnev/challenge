import React from 'react';
import Header from "./Header";
import Content from "./Content";

const Ads = ({ads = []}) => {
    return (
        <>
           <Header/>
           <Content/>
        </>
    )
};

export default Ads
