import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Article } from "../../components/article/Article";
import { getLinks } from "./FeedService";
import { FiRefreshCw } from "react-icons/fi";
import "./Feed.css";

export function Feed() {
  const [links, setLinks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [countResults, setCountResults] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { value = "" } = useSelector((state) => state.Header);

  useEffect(() => {
    getLinks().then((res) => {
      let newLinks = res?.links?.map((item, i) => {
        let additionalInfos = handleCategory(item.category);
        item = { ...item, ...additionalInfos, id: i + 1 };
        return item;
      });
      setLinks(newLinks);
    });
  }, []);

  useEffect(() => {
    setCountResults(0);
    links.map(
      (item) =>
        item.meta.title.toUpperCase().includes(value.toUpperCase()) &&
        setCountResults(1)
    );
  }, [value]);

  function handleCategory(category) {
    switch (category) {
      case "ux_ui":
        return { text: "UX Theory", backgroundColor: "#00bbff" };
      case "case_study":
        return { text: "Case Study", backgroundColor: "#f4983f" };
      case "product_design":
        return { text: "Product Design", backgroundColor: "#00e2ad" };
      case "discussion":
        return { text: "Opinion", backgroundColor: "#f4983f" };
      default:
        return category;
    }
  }

  function handleActiveFilter(filter) {
    setActiveFilter(filter);
    if (filter === "Upvotes") {
      links.sort((a, b) => b.upvotes - a.upvotes);
    }
    if (filter === "Date") {
      links.sort((a, b) => b.created_at - a.created_at);
    }
    if (filter === "Comments") {
      links.sort((a, b) => b.comments - a.comments);
    }
  }

  function handleOrder(infos) {
    links.map((item) => {
      if (item.id === infos.id && !item.voted) {
        item.voted = true;
        item.upvotes += 1;
      }
      return item;
    });
    if (activeFilter === "Upvotes") {
      links.sort((a, b) => b.upvotes - a.upvotes);
    }
    setRefresh(!refresh);
  }
  return (
    <div className="container-feed">
      {links.length ? (
        <>
          <div className="filter">
            <span
              onClick={() => handleActiveFilter("Upvotes")}
              style={activeFilter === "Upvotes" ? { opacity: 1 } : {}}
            >
              Upvotes
            </span>
            <span
              onClick={() => handleActiveFilter("Date")}
              style={activeFilter === "Date" ? { opacity: 1 } : {}}
            >
              Date
            </span>
            <span
              onClick={() => handleActiveFilter("Comments")}
              style={activeFilter === "Comments" ? { opacity: 1 } : {}}
            >
              Comments
            </span>
          </div>
          {links.map(
            (item) =>
              item.meta.title.toUpperCase().includes(value.toUpperCase()) && (
                <Article infos={item} handleOrder={handleOrder}></Article>
              )
          )}
          {countResults === 0 ? (
            <div className="no-results">No results found</div>
          ) : null}

          <button className="button-load-more">
            <FiRefreshCw></FiRefreshCw>&nbsp; Load More
          </button>
        </>
      ) : (
        <div class="loader"></div>
      )}
    </div>
  );
}
