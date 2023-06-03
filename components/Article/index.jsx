import React from "react";
import Link from "next/link";
import cn from "classnames";
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from "./index.module.scss";

const Article = ({ className, backUrl, children }) => {
  return (
    <article className={cn(className, styles.article)}>
      <Link href={backUrl}>
        <a className={styles.articleBack}>
          <AiOutlineArrowLeft />
        </a>
      </Link>
      <div className={styles.articleContent}>{children}</div>
    </article>
  );
};

export default Article;
