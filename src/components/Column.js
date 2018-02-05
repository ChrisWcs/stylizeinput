import React from 'react';

const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const Column = (props) => (
    <div style={style}>
        {props.children}
    </div>
);

export default Column;