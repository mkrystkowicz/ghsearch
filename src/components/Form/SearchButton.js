import classes from './SearchButton.module.scss';

const SearchButton = () => {
  return (
    <button className={classes.SearchButton}>
      <i class="fas fa-search"></i>
    </button>
  );
};

export default SearchButton;
