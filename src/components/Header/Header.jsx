import './Header.css';

const Header = ({ headerLogo }) => {
  return (
    <div>
        <div className='header-logo'>
          <img className='logo-img' src={headerLogo} alt="Title Pokemon" />
        </div>
        <h1 className='title'>Whose that pokemon?</h1>
    </div>
  )
}

export default Header