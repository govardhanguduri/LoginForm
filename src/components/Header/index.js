import './index.css'
import { useNavigate} from 'react-router-dom'
// import Cookies from 'js-cookie'

const Header = () => {

  const Navigate = useNavigate();
  const onClickLogout = () => {
    localStorage.clear('token')
    Navigate('/login')
  }
  return (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />

        <button type="button" className="nav-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-bar-img"
          />
        </button>
      </div>

      <div className="nav-content nav-bar-large-container">
        <h1>Dashboard</h1>
        <ul className="nav-menu">
          <li className="nav-menu-item">Home</li>
          {/* <Link to={"/login"}>  */}
            <button type="button"  className="logout-desktop-btn" onClick={onClickLogout}>
              Logout
            </button>
          {/* </Link> */}
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default(Header)
