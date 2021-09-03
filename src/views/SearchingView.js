import Wrapper from '../components/Wrapper/Wrapper';
import Logo from '../components/Logo/Logo';
import Form from '../components/Form/Form';
import colors from '../helpers/colors.contants';
import classes from './SearchingView.module.scss';

const SearchingView = () => {
  return (
    <Wrapper className={classes.ViewWrapper} color={colors.BLACK}>
      <Wrapper className={classes.SearchWrapper} color={colors.WHITE}>
        <Logo />
        <Form />
      </Wrapper>
    </Wrapper>
  );
};

export default SearchingView;
