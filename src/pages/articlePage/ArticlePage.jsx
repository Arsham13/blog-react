import React, { useEffect, useState } from "react";
import styled from "./articlePage.module.css";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import image from "images/hero2.jpg";

function ArticlePage() {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();

    console.log(params);
    // ببین اونجا ما بعد دونقطه اسم id رو نوشتیم پس اینجا اسم id رو میگیریم

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`http://localhost:8000/articles?id=${params.id}`)

            .then((res) => {
                setArticle(res.data[0]);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className={styled.articlePage}>
                    {isLoading ? (
                        <SkeletonTheme
                            baseColor="#212d40"
                            highlightColor="#364156"
                        >
                            <Skeleton
                                height={20}
                                width={250}
                                borderRadius={9}
                            />
                            <div className={styled.articleInfo}>
                                <Skeleton
                                    height={10}
                                    width={80}
                                    borderRadius={12}
                                />
                                <Skeleton
                                    height={10}
                                    width={80}
                                    borderRadius={12}
                                />
                                <Skeleton
                                    height={10}
                                    width={80}
                                    borderRadius={12}
                                />
                            </div>
                            <Skeleton
                                height={900}
                                width={800}
                                borderRadius={6}
                                style={{
                                    maxWidth: "1200px",
                                    alignSelf: "center",
                                }}
                            />
                            <Skeleton
                                height={15}
                                width={800}
                                borderRadius={9}
                                count={20}
                            />
                        </SkeletonTheme>
                    ) : (
                        <>
                            <h1>{article.title}</h1>
                            <div className={styled.articleInfo}>
                                <p>
                                    تاریخ :<span> {article.date}</span>
                                </p>
                                <p>
                                    نویسنده :<span> {article.author}</span>
                                </p>
                                <p>
                                    زمان خواندن :
                                    <span> {article.readingTime}</span>
                                </p>
                            </div>
                            <img
                                src={`../${article.imageUrl}`}
                                alt={article.title}
                            />
                            <p>{article.content}</p>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ArticlePage;
