import React from 'react';

const style = {
    fontSize: "25px",
    border: "solid 1px black",
    borderRadius: "5px",
    padding: "5px",
    background: "white",
    cursor: "pointer",
};

const StyleBtn = ({func, styleObj, label}) => (
    <button onClick={func} 
            style={{...style, ...styleObj}}>
            {label}
    </button>
);

export default StyleBtn;