import Input from './Input';
import SearchButton from './SearchButton';
import classes from './Form.module.scss';

const Form = () => {
  return (
    <form className={classes.Form}>
      <Input placeholder="Github name" />
      <SearchButton />
    </form>
  );
};

export default Form;
