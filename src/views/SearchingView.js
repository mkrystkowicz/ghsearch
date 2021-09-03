import Wrapper from '../components/Wrapper/Wrapper';
import Logo from '../components/Logo/Logo';
import Form from '../components/Form/Form';
import colors from '../helpers/colors.contants';
import classes from './SearchingView.module.scss';

const ViewWrapperVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: 'easeOut', duration: 1, when: 'beforeChildren' } },
};

const SearchWrapperVariants = {
  hidden: { y: '-50%', x: '-50%', opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 0.3, when: 'beforeChildren' } },
};

const SearchWrapperChildrenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: 'easeOut', duration: 0.3 } },
};

const SearchingView = () => {
  return (
    <Wrapper initial="hidden" animate="visible" variants={ViewWrapperVariants} className={classes.ViewWrapper} color={colors.BLACK}>
      <Wrapper variants={SearchWrapperVariants} className={classes.SearchWrapper} color={colors.WHITE}>
        <Logo variants={SearchWrapperChildrenVariants} />
        <Form variants={SearchWrapperChildrenVariants} />
      </Wrapper>
    </Wrapper>
  );
};

export default SearchingView;
