import React from "react";
import styled from "./input.module.css";

function Input(props) {
    console.log(props.error);
    return (
        <div
            className={`${styled.input_wrapper} ${
                props.error !== "ok" && props.error !== "" ? styled.error : ""
            }`}
        >
            {props.error !== "ok" && props.error !== "" && (
                <p style={{ color: "red" }}>{props.error}</p>
            )}
            <input
                onChange={props.handleChange}
                type={props.type}
                name={props.name}
                id={props.name}
            />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    );
}

export default Input;
