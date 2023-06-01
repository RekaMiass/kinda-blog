import React from 'react';
import cn from "classnames";
import styles from "./index.module.scss";

const Title = ({className, children}) => {
  return (
    <h2 className={cn(className, styles.title)}>{children}</h2>
  )
}

export default Title