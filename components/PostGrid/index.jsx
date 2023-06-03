import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";

const PostGrid = ({ className, children }) => {
  return <div className={cn(className, styles.postGrid)}>{children}</div>;
};

export default PostGrid;
