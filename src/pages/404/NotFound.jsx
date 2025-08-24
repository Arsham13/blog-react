import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import styled from "./notFound.module.css";

function NotFound() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className={styled.notFound}>
                    <h1 title="404">
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </h1>
                    <h2 title="صفحه مورد نظر شما یافت نشد!">صفحه مورد نظر شما یافت نشد!</h2>
                </div>
            </div>
        </>
    );
}

export default NotFound;
