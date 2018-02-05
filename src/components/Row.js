import React from 'react';

const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
};

const Row = (props) => (
    <div style={style}>
        {props.children}
    </div>
);

export default Row;