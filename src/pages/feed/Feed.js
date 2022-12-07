import React, { useEffect, useState } from "react";
import { Article } from "../../components/article/Article";
import { getLinks } from "./FeedService";
import { FiRefreshCw } from "react-icons/fi";
import "./Feed.css";

export function Feed() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks().then((res) => {
      let newLinks = res?.links?.map((item) => {
        let additionalInfos = handleCategory(item.category);
        item = { ...item, ...additionalInfos };
        return item;
      });
      setLinks(newLinks);
    });
  }, []);

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
  return (
    <div className="container-feed">
      {links.map((item) => (
        <Article infos={item}></Article>
      ))}
      <button className="button-load-more">
        <FiRefreshCw></FiRefreshCw>&nbsp; Load More
      </button>
    </div>
  );
}
