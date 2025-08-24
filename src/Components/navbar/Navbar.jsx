import { Link } from "react-router-dom";
import styled from "./navbar.module.css";
import { useEffect, useState } from "react";

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 500) {
                setIsOpen(false); // وقتی دسکتاپ شد منو بسته میشه
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className={styled.header}>
                <ul>
                    <li className={styled.logo}>
                        <Link to="/">
                            <h1>سِربِلاگ</h1>
                        </Link>
                    </li>
                    <li onClick={() => setIsOpen(true)} id={styled.menu}>
                        منو
                    </li>
                    <div>
                        <li>
                            <Link to="/">لیست مقالات</Link>
                        </li>
                        <li>
                            <Link to="/create-article">ساخت مقاله</Link>
                        </li>
                        <li>
                            <Link to="/about">درباره</Link>
                        </li>
                    </div>
                </ul>
                <ul className={`${styled.modal} ${isOpen ? styled.open : ""}`}>
                    <div>
                        <li onClick={() => setIsOpen(false)} id={styled.close}>
                            بستن
                        </li>
                    </div>
                    <li>
                        <Link to="/">لیست مقالات</Link>
                    </li>
                    <li>
                        <Link to="/create-article">ساخت مقاله</Link>
                    </li>
                    <li>
                        <Link to="/about">درباره</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
