import styles from './Button.module.scss';

//przykład przekazania przez propsa
// const Button = props => {
//     return (
//         <button className={styles.button}>{props.text}</button>
//     );
// };

//przykład przekazania przez children
const Button = props => {
    return (
        <button className={styles.button}>{props.children}</button>
    );
};

export default Button;