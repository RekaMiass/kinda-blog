import React from 'react';
import cn from "classnames";
import styles from "./index.module.scss";

const Post = ({className, image, title, description, slug}) => {
  return (
    <div className={cn(className, styles.post)}>{title}</div>
  )
}

export default Post