import React from "react";

const Label = (props) => {

    return <div className="Label">
        <span>{props.name}: </span><span>{props.content}</span>
    </div>
}

export default Label