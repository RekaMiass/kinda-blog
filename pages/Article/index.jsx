import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";

const Article = ({ className, children }) => {
  return (
    <article className={cn(className, styles.article)}>{children}</article>
  );
};

export default Article;
