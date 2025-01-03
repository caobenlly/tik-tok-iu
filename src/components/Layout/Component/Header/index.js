import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import className from "classnames/bind";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faEllipsisVertical,
  faMagnifyingGlass,
  faSpinner,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
// import Tippy from "@tippyjs/react";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import { useState } from "react";
import Menu from "../../../Popper/Menu/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "../../../Icons";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

const cx = className.bind(styles);
export default function Header() {
  const currentUser = true;
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const a = [1, 2, 3];
      setSearchResult(a);
    }, 0);
  }, []);
  console.log("check");

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <PopperWrapper>
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </div>
            </PopperWrapper>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

       
          <div className={cx("actions")}>
            {currentUser ? (
              <>
                <Tippy
                  delay={[0, 50]}
                  content="Upload video"
                  placement="bottom"
                >
                  <button className={cx("action-btn")}>
                    <UploadIcon />
                  </button>
                </Tippy>
                <Tippy delay={[0, 50]} content="Message" placement="bottom">
                  <button className={cx("action-btn")}>
                    <MessageIcon />
                  </button>
                </Tippy>
                <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                  <button className={cx("action-btn")}>
                    <InboxIcon />
                    <span className={cx("badge")}>12</span>
                  </button>
                </Tippy>
              </>
            ) : (
              <>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>
              </>
            )}

            <Menu items={MENU_ITEMS}>
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </Menu>
          </div>
        
      </div>
    </header>
  );
}
