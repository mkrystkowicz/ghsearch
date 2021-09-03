import LogoImage from '../../assets/ghsearch-logo.svg';
import classes from './Logo.module.scss';

const Logo = () => {
  return <img className={classes.Logo} src={LogoImage} alt="Logo" />;
};

export default Logo;
