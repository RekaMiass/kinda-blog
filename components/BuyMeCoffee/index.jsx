import React from "react";
import cn from "classnames";
import ScreenEgg from "../ScreenEgg";

import styles from "./index.module.scss";

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cn(className, styles.buyCoffee)}>
        <a
          href="https://www.tinkoff.ru/"
          target="_blank"
          className={styles.buyCoffeeButton}
          rel="noreferrer"
        >
          Buy me a coffee...
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
