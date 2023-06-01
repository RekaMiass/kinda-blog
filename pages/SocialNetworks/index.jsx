import React from "react";
import cn from "classnames";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import styles from "./index.module.scss";
import ScreenEgg from "../ScreenEgg";

const socialNetworks = [
  {
    id: 1,
    href: "https://github.com/",
    icon: AiFillGithub,
  },
  {
    id: 2,
    href: "https://youtube.com/",
    icon: AiFillYoutube,
  },
  {
    id: 3,
    href: "https://twitter.com/",
    icon: AiFillTwitterCircle,
  },
  {
    id: 4,
    href: "https://instagram.com/",
    icon: AiFillInstagram,
  },
];

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg type="left">
      <ul className={cn(className, styles.list)}>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id} className={styles.listItem}>
            <a
              href={socialNetwork.href}
              target="_blank"
              className={styles.listLink}
              rel="noreferrer"
            >
              {React.createElement(socialNetwork.icon, {
                color: "black",
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
