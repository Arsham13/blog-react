import React from "react";
import styled from "./textarea.module.css";

function TextArea(props) {
    return (
        <div className={`${styled.textarea_wrapper} ${props.error !== "ok" && props.error !== "" && styled.error}`}>
            {props.error !== "ok" && props.error !== "" && <p style={{ color: "red" }}>{props.error}</p>}
            <textarea onChange={props.handleChange} name="content" id="content"></textarea>
            <label htmlFor="content">{props.label}</label>
        </div>
    );
}

export default TextArea;
