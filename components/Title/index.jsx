import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";

const Title = ({ className, type, children }) => {
  if (type === "small") {
    return (
      <h3 className={cn(className, styles.title, styles.titleSmall)}>
        {children}
      </h3>
    );
  }
  return (
    <h2 className={cn(className, styles.title, styles.titleMedium)}>
      {children}
    </h2>
  );
};

export default Title;
