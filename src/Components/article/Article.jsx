import React from "react";
import styled from "./article.module.css";

function Article(props) {
    console.log(props.article.imageUrl);
    return (
        <div className={styled.article}>
            <img
                src={props.article.imageUrl}
                alt={"عکس " + props.article.title}
            />
            <div className={styled.articleText}>
                <h4 title={props.article.title}>{props.article.title}</h4>
                <div className={styled.articleInfo}>
                    <p>
                        نویسنده : <span>{props.article.author}</span>
                    </p>
                    <p>
                        زمان خواندن :{" "}
                        <span>{props.article.readingTime} دقیقه</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Article;
