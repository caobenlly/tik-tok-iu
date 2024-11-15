import React from "react";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import PopperWrapper from "../../Popper/Wrapper.js";
import classNames from "classnames/bind";
import MenuItem from "./MenuItem.js";
import Headers from "./Header.js";


const cx = classNames.bind(styles);
export default function Menu({children, items =[]}) {

  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

    const renderItems = () => {
         return current.data.map(items,index) => {
          
         }
    };
  return (
    <Tippy
      interactive
      delay={[0,700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
           <PopperWrapper className={cx('menu-popper')}>
            <Headers/>
          {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
    {children}
    </Tippy>
  );
}
