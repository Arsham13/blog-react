import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import Article from "../../Components/article/Article";
import styled from "./home.module.css";
import styled2 from "../../Components/article/article.module.css";
import axios from "axios";
import Footer from "../../Components/footer/Footer";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Home() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get("http://localhost:8000/articles")
            .then((res) => {
                setArticles(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Navbar title="ali" />
            <div className="container">
                <h2>مقالات جدید</h2>
                {
                    <div className={styled.articles}>
                        {isLoading ? (
                            <SkeletonTheme
                                baseColor="#212d40"
                                highlightColor="#364156"
                            >
                                <div className={styled2.article}>
                                    <Skeleton
                                        height={150}
                                        width={"90%"}
                                        style={{margin: '4.5%', marginBottom:'0'}}
                                        borderRadius={6}
                                    />
                                    <div className={styled2.articleText}>
                                        <Skeleton
                                            height={20}
                                            width={150}
                                            borderRadius={12}
                                        />
                                        <Skeleton
                                            height={15}
                                            width={100}
                                            borderRadius={12}
                                        />
                                    </div>
                                </div>
                                <div className={styled2.article}>
                                    <Skeleton
                                        height={150}
                                        width={"90%"}
                                        style={{margin: '4.5%', marginBottom:'0'}}
                                        borderRadius={6}
                                    />
                                    <div className={styled2.articleText}>
                                        <Skeleton
                                            height={20}
                                            width={150}
                                            borderRadius={12}
                                        />
                                        <Skeleton
                                            height={15}
                                            width={100}
                                            borderRadius={12}
                                        />
                                    </div>
                                </div>
                                <div className={styled2.article}>
                                    <Skeleton
                                        height={150}
                                        width={"90%"}
                                        style={{margin: '4.5%', marginBottom:'0'}}
                                        borderRadius={6}
                                    />
                                    <div className={styled2.articleText}>
                                        <Skeleton
                                            height={20}
                                            width={150}
                                            borderRadius={12}
                                        />
                                        <Skeleton
                                            height={15}
                                            width={100}
                                            borderRadius={12}
                                        />
                                    </div>
                                </div>
                                <div className={styled2.article}>
                                    <Skeleton
                                        height={150}
                                        width={"90%"}
                                        style={{margin: '4.5%', marginBottom:'0'}}
                                        borderRadius={6}
                                    />
                                    <div className={styled2.articleText}>
                                        <Skeleton
                                            height={20}
                                            width={150}
                                            borderRadius={12}
                                        />
                                        <Skeleton
                                            height={15}
                                            width={100}
                                            borderRadius={12}
                                        />
                                    </div>
                                </div>
                                <div className={styled2.article}>
                                    <Skeleton
                                        height={150}
                                        width={"90%"}
                                        style={{margin: '4.5%', marginBottom:'0'}}
                                        borderRadius={6}
                                    />
                                    <div className={styled2.articleText}>
                                        <Skeleton
                                            height={20}
                                            width={150}
                                            borderRadius={12}
                                        />
                                        <Skeleton
                                            height={15}
                                            width={100}
                                            borderRadius={12}
                                        />
                                    </div>
                                </div>
                                <div className={styled2.article}>
                                    <Skeleton
                                        height={150}
                                        width={"90%"}
                                        style={{margin: '4.5%', marginBottom:'0'}}
                                        borderRadius={6}
                                    />
                                    <div className={styled2.articleText}>
                                        <Skeleton
                                            height={20}
                                            width={150}
                                            borderRadius={12}
                                        />
                                        <Skeleton
                                            height={15}
                                            width={100}
                                            borderRadius={12}
                                        />
                                    </div>
                                </div>
                            </SkeletonTheme>
                        ) : (
                            articles.map((article) => (
                                <Link to={`/article/${article.id}`}>
                                    <Article
                                        key={article.id}
                                        article={article}
                                    />
                                </Link>
                            ))
                        )}
                    </div>
                }
            </div>
            <Footer />
        </>
    );
}

export default Home;
