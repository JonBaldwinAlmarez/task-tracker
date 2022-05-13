import PropTypes from 'prop-types'
import Button from './Button' // Add the Button

const Header = ({ title , onAdd }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.prototype = {
    title: PropTypes.string
}

// const headingStyle = {
//     color: 'royalblue' , 
//     backgroundColor: 'black'
// }

export default Header