import React from "react";
import "./Article.css";
import { ImCtrl, ImImage, ImBubble } from "react-icons/im";

export function Article({ infos }) {
  return (
    <div className="container-article">
      <section>
        <div className="container-upvotes">
          <span className="icon-up">
            <ImCtrl size="22"></ImCtrl>
          </span>
          <span className="upvotes">{infos?.upvotes}</span>
        </div>
      </section>
      <section className="infos">
        <div className="url">{infos?.meta?.url.toUpperCase()}</div>
        <div className="title">{infos?.meta?.title}</div>
        <div className="complement">
          <div
            className="category"
            style={{ backgroundColor: infos.backgroundColor }}
          >
            {infos?.text}
          </div>
          <div className="author">
            <ImImage size="16" color="#d6d6d6"></ImImage>
            <span>{infos?.meta?.author}</span>
          </div>
          <div className="hours">43 minutes ago</div>
          <span className="point">.</span>
          <div className="comments">
            <ImBubble></ImBubble>&nbsp;
            {infos?.comments}
            &nbsp;Comments
          </div>
        </div>
      </section>
    </div>
  );
}
