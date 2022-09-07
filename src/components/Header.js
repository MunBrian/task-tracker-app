import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title}) => {
  const onClick = (e) => {
    console.log(e.target)
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  );
};

//default props
Header.defaultProps = {
  title: 'Task Tracker'
}

//propType
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
