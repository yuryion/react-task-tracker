import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => { //{ title } this is called destructuring
  const onClick = () => {
    console.log('click')
  }
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='add' onClick={onClick}/>
    </header> 
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// if not in a variable like headingStyle remember to use two curly braces
// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header