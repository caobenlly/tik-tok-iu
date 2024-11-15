import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '../../Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data}) {

    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
