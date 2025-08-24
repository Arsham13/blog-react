import React, { useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../Components/input/Input";
import TextArea from "../../Components/textarea/TextArea";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
    const navigate = useNavigate();
    const [articleValues, setArticleValues] = useState({
        title: "",
        date: "",
        readingTime: "",
        author: "",
        content: "",
        imageUrl: "",
    });
    const [errors, setErrors] = useState({
        title: "",
        date: "",
        readingTime: "",
        author: "",
        content: "",
        imageUrl: "",
    });

    const handleChangeInput = (e) => {
        setArticleValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        switch (e.target.name) {
            case "title":
                if (!e.target.value.trim()) {
                    setErrors((prevState) => ({
                        ...prevState,
                        title: "فیلد عنوان نمی‌تواند خالی باشد.",
                    }));
                } else if (e.target.value.length < 3) {
                    setErrors((prevState) => ({
                        ...prevState,
                        title: "حداقل باید ۳ کاراکتر وارد کنید.",
                    }));
                } else {
                    setErrors((prevState) => ({
                        ...prevState,
                        title: "ok",
                    }));
                }
                console.log(errors.title);
                break;
            case "date":
                console.log(e.target.value);
                if (!e.target.value.trim()) {
                    setErrors((prevState) => ({
                        ...prevState,
                        date: "فیلد تاریخ نمی‌تواند خالی باشد.",
                    }));
                } else {
                    setErrors((prevState) => ({
                        ...prevState,
                        date: "ok",
                    }));
                }
                break;
            case "readingTime":
                if (!e.target.value.trim()) {
                    setErrors((prevState) => ({
                        ...prevState,
                        readingTime:
                            "فیلد مدت زمان خواندن نمی‌تواند خالی باشد.",
                    }));
                } else if (!isFinite(e.target.value)) {
                    setErrors((prevState) => ({
                        ...prevState,
                        readingTime: "زمان خواندن باید یک عدد باشد",
                    }));
                } else {
                    setErrors((prevState) => ({
                        ...prevState,
                        readingTime: "ok",
                    }));
                }
                break;
            case "author":
                if (!e.target.value.trim()) {
                    setErrors((prevState) => ({
                        ...prevState,
                        author: "فیلد نویسنده نمی‌تواند خالی باشد.",
                    }));
                } else if (e.target.value.length < 3) {
                    setErrors((prevState) => ({
                        ...prevState,
                        author: "حداقل باید ۳ کاراکتر وارد کنید.",
                    }));
                } else {
                    setErrors((prevState) => ({
                        ...prevState,
                        author: "ok",
                    }));
                }
                break;
            case "imageUrl":
                if (!e.target.value.trim()) {
                    setErrors((prevState) => ({
                        ...prevState,
                        imageUrl: "فیلد آدرس عکس نمی‌تواند خالی باشد.",
                    }));
                } else if (e.target.value.length < 3) {
                    setErrors((prevState) => ({
                        ...prevState,
                        imageUrl: "حداقل باید ۳ کاراکتر وارد کنید.",
                    }));
                } else {
                    setErrors((prevState) => ({
                        ...prevState,
                        imageUrl: "ok",
                    }));
                }
                break;
            default:
                break;
        }
    };
    const handleChangeTextarea = (e) => {
        setArticleValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        if (!e.target.value.trim()) {
            setErrors((prevState) => ({
                ...prevState,
                content: "فیلد متن نمی‌تواند خالی باشد.",
            }));
        } else if (e.target.value.length < 3) {
            setErrors((prevState) => ({
                ...prevState,
                content: "حداقل باید ۳ کاراکتر وارد کنید.",
            }));
        } else {
            setErrors((prevState) => ({
                ...prevState,
                content: "ok",
            }));
        }
    };

    const handleCreateNewArticle = (e) => {
        if (
            errors.title === "ok" &&
            errors.date === "ok" &&
            errors.readingTime === "ok" &&
            errors.author === "ok" &&
            errors.imageUrl === "ok" &&
            errors.content === "ok"
        ) {
            axios.post("http://localhost:8000/articles", {
                id: 3334235,
                imageUrl: articleValues.imageUrl,
                title: articleValues.title,
                readingTime: articleValues.readingTime,
                date: articleValues.date,
                author: articleValues.author,
                content: articleValues.content,
            });
            navigate("/");
        } else {
            e.preventDefault();
        }
    };

    // const [image, setImage] = useState(null);

    // const handleFile = (e) => {
    //     const file = e.target.files[0];
    //     if (!file) return;

    //     const validTypes = [
    //         "image/jpeg",
    //         "image/png",
    //         "image/gif",
    //         "image/webp",
    //     ];
    //     if (!validTypes.includes(file.type)) {
    //         alert("فقط فایل تصویری مجاز است!");
    //         return;
    //     }

    //     if (file.size > 2 * 1024 * 1024) {
    //         alert("حجم فایل باید کمتر از 2 مگابایت باشد");
    //         return;
    //     }

    //     setImage(URL.createObjectURL(file));
    // };
    console.log(articleValues);
    console.log(errors);
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>ساخت مقاله</h1>
                <Input
                    label="عنوان"
                    name="title"
                    handleChange={handleChangeInput}
                    error={errors.title}
                />
                <Input
                    label="تاریخ"
                    name="date"
                    handleChange={handleChangeInput}
                    error={errors.date}
                    type={"date"}
                />
                <Input
                    label="مدت زمان خواندن"
                    name="readingTime"
                    handleChange={handleChangeInput}
                    error={errors.readingTime}
                />
                <Input
                    label="نویسنده"
                    name="author"
                    handleChange={handleChangeInput}
                    error={errors.author}
                />
                <Input
                    label="آدرس عکس"
                    name="imageUrl"
                    handleChange={handleChangeInput}
                    error={errors.imageUrl}
                />
                {/* <Input
                    label="عکس"
                    name="image"
                    handleChange={handleFile}
                    type="file"
                /> */}
                {/* {image && <img src={image} alt="preview" width="200" />} */}
                <TextArea
                    label="متن"
                    handleChange={handleChangeTextarea}
                    error={errors.content}
                />
                <div className={styled.button_wrapper}>
                    <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
                </div>
            </div>
        </>
    );
}

export default CreateArticle;
