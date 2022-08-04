import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

const Loading = () => {
    return (
        <div className={cx('loader')}>
            <div className={cx('ld1')}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
