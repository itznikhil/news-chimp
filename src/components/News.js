import React, { useState, useEffect, useContext } from "react";
import {ProgressContext} from "../Helper/context";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

export default function News({ country, pageSize, topic, language }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const { setProgress } = useContext(ProgressContext)

  useEffect(() => {
    setProgress(0)
    updateArticles();
    setProgress(100)
    // eslint-disable-next-line
  }, []);

  const updateArticles = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://api.newscatcherapi.com/v2/latest_headlines?countries=${country}&topic=${topic}&lang=${language}&page_size=${pageSize}&page=${page + 1}`,
      {
        headers: {
          "X-Api-Key": apiKey
        }
      } 
    );
    const jsonData = await response.json();
    console.log(jsonData)
    setTotalResults(jsonData.total_hits);
    setArticles(articles.concat(jsonData.articles));
    setPage(page + 1)
  };
  return (
    <>
      <h1 className="text-center" style={{marginTop:"75px"}}>NewsChimp - Top Headlines</h1>
      <hr className="container" />
      <InfiniteScroll
        dataLength={articles.length}
        next={updateArticles}
        hasMore={articles.length !== totalResults}
        loader={
          <div className="text-center">
            <Loader />
          </div>
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((article, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem article={article} />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 10,
  topic: "news",
  language:"en"
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  topic: PropTypes.string,
  language: PropTypes.string,
};
