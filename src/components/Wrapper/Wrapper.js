import classes from './Wrapper.module.scss';
import { motion } from 'framer-motion';
import colors from '../../helpers/colors.contants';

const Wrapper = ({ children, color, className, ...props }) => {
  let combinedClasses = [classes.Wrapper];

  if (color === colors.BLACK) {
    combinedClasses = [...combinedClasses, className, classes.BlackBackground].join(' ');
  } else if (color === colors.WHITE) {
    combinedClasses = [...combinedClasses, className, classes.WhiteBackground].join(' ');
  }

  return (
    <motion.div className={combinedClasses} {...props}>
      {children}
    </motion.div>
  );
};

export default Wrapper;
