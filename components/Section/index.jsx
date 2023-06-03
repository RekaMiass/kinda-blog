import React from 'react';
import cn from "classnames";

import styles from "./index.module.scss";

const Section = ({className, children}) => {
  return (
    <section className={cn(className, styles.section)}>{children}</section>
  )
}

export default Section