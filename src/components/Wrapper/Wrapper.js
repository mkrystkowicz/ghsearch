import classes from './Wrapper.module.scss';
import colors from '../../helpers/colors.contants';

const Wrapper = ({ children, color, className }) => {
  let combinedClasses = [classes.Wrapper];

  if (color === colors.BLACK) {
    combinedClasses = [...combinedClasses, className, classes.BlackBackground].join(' ');
  } else if (color === colors.WHITE) {
    combinedClasses = [...combinedClasses, className, classes.WhiteBackground].join(' ');
  }

  return <div className={combinedClasses}>{children}</div>;
};

export default Wrapper;
