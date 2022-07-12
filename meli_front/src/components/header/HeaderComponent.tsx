import { Link } from 'react-router-dom';
import logo from '../../assets/img/Logo_ML.png';
import { SearchComponent } from '../search/SearchComponent';

export const HeaderComponent = () => {

  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <SearchComponent />
      </div>
    </header>
  )
}
