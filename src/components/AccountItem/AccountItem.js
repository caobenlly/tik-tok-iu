import PropTypes from "prop-types";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
// import Image from '~/components/Image';
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/44d668702d08554c05ccf9d08d8018be.jpeg?lk3s=a5d48078&nonce=17509&refresh_token=545ccc62ec7113054410a4ff2ce54dc5&x-expires=1731747600&x-signature=bWenXFwVDW3kdzIXiSp7LWn4EME%3D&shp=a5d48078&shcp=81f88b70" alt="Hoaa" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon  className={cx("check")} icon={faCheckCircle}></FontAwesomeIcon>
        </p>
        <span className={cx('username')}>Nguyen Van A</span>
      </div>
    </div>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
