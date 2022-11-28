import './Header.css';

const Header = ({ headerLogo }) => {
  return (
    <div className='header-logo'>
        <img className='logo-img' src={headerLogo} alt="Title Pokemon" />
    </div>
  )
}

export default Header