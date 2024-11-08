import React from "react";
import styles from "./Header.module.scss";
import className from "classnames/bind";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);
export default function Header() {
  return (
      <header className={cx('wrapper')}>
          <div className={cx('inner')}>
              <img src={images.logo} alt="Tiktok" />
              <div className={cx('search')}>
                  <input placeholder="Search accounts and videos" spellCheck={false} />
                  <button className={cx('clear')}>
                      <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                  <button className={cx('search-btn')}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
              </div>
              <div className={cx('actions')}></div>
          </div>
      </header>
  );
}
