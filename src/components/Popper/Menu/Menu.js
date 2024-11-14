import React from "react";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import PopperWrapper from "../../Popper/Wrapper.js";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);
export default function Menu({children}) {
  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h2>Menu items</h2>
          </PopperWrapper>
        </div>
      )}
    >
    {children}
    </Tippy>
  );
}
