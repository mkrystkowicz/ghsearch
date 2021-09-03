import { motion } from 'framer-motion';
import LogoImage from '../../assets/ghsearch-logo.svg';
import classes from './Logo.module.scss';

const Logo = ({ ...props }) => {
  return <motion.img className={classes.Logo} src={LogoImage} alt="Logo" {...props} />;
};

export default Logo;
