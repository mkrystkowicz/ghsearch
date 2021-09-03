import classes from './Input.module.scss';

const Input = ({ placeholder }) => {
  return <input type="text" className={classes.Input} placeholder={placeholder} autoComplete="off" />;
};

export default Input;
