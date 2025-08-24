import React from "react";
import styled from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className={styled.footer}>
                {/* <div className={styled.wave1}></div>
                <div className={styled.wave2}></div> */}
                <div
                    onClick={() => (document.documentElement.scrollTop = 0)}
                    className={styled.up}
                >
                    بالا
                </div>
                <div className={styled.part1}>
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className={styled.part2}>
                    <h3>لینک های مفید</h3>
                    <p>
                        <Link to={"/#"}>سوالات متداول</Link>
                    </p>
                    <p>
                        <Link to={"/"}>خانه</Link>
                    </p>
                    <p>
                        <Link to={"/create-article"}>ساخت مقاله جدید</Link>
                    </p>
                </div>
                <div className={styled.part3}>
                    <h3>ارتباط با ما</h3>
                    <p>تلفن : 09945933373</p>
                    <p>واتساپ</p>
                    <p>تلگرام</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
