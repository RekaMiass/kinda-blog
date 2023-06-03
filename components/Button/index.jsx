import React from "react";
import cn from "classnames";

import styles from "./index.module.scss";

const Button = ({ className, children, onClick, disabled }) => {
  return (
    <div className={cn(className, styles.button)} onClick={onClick} disabled={disabled}>
      {children}
    </div>
  );
};

export default Button;
