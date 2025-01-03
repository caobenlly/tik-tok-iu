import React from "react";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import PopperWrapper from "../../Popper/Wrapper.js";
import classNames from "classnames/bind";
import MenuItem from "./MenuItem.js";
import Headers from "./Header.js";
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

export default function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
        const isParent = !!item.children;

        return (
            <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    if (isParent) {
                        setHistory((prev) => [...prev, item.children]);
                    } else {
                        onChange(item);
                    }
                }}
            />
        );
    });
};
  return (
    <Tippy
      interactive
      delay={[0,700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
           <PopperWrapper className={cx('menu-popper')}>
            {
              history.length > 1 && (
                <Headers 
                title="Language"
                onBack={()=>{
                  setHistory((prev) => prev.slice(0,prev.length -1))
                }}
                />
              )
            }
            
          {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHidden={()=>setHistory((prev) =>prev.slice(0,1))}
    >
    {children}
    </Tippy>
  );
}
