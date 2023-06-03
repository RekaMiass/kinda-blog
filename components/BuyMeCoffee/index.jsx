import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import ScreenEgg from "../ScreenEgg";

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
