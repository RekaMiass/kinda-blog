import React from 'react';
import cn from "classnames";
import styles from "./index.module.scss";

const ScreenEgg = ({className, type, children}) => {
  return (
    <div className={cn(className, styles.screenEgg, type === 'right' ? styles.screenEggRight : styles.screenEggLeft)}>{children}</div>
  )
}

export default ScreenEgg