import React from "react";
import classNames from "classnames";
import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);
export default function Wrapper({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}
