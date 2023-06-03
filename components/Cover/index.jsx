import React from 'react';
import cn from "classnames";
import styles from "./index.module.scss";

const Cover = ({className, title}) => {
  return (
    <div className={cn(className, styles.cover)}>
      <h1 className={styles.coverTitle} dangerouslySetInnerHTML={{__html: title}}></h1>
    </div>
  )
}

export default Cover