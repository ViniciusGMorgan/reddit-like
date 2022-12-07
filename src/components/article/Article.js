import React, { useState } from "react";
import "./Article.css";
import { ImCtrl, ImImage, ImBubble } from "react-icons/im";
import { motion } from "framer-motion";
import { timeConverter } from "../../services/helpers";

export function Article({ infos, handleOrder }) {
  const [move, setMove] = useState(1);

  return (
    <div className="container-article">
      <section>
        <div className="container-upvotes">
          <span className="icon-up" onClick={() => handleOrder(infos)}>
            <motion.div
              animate={{ scale: move }}
              onHoverStart={(e) => {
                setMove(1.4);
              }}
              onHoverEnd={(e) => {
                setMove(1);
              }}
            >
              <ImCtrl size="22"></ImCtrl>
            </motion.div>
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
          <div className="hours">
            {infos.created_at && timeConverter(infos.created_at)}
          </div>
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
