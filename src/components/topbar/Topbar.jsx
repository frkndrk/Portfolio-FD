import "./topbar.scss";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <h1 className="logo"><a href="#intro">genius.</a></h1>
          <div className="info">
            <PersonIcon className="icon"/>
            <span>+90 545 450 15 25</span>
          </div>
          <div className="info">
            <EmailIcon className="icon"/>
            <span>furkandurak22@hotmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className={"hamburger " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
