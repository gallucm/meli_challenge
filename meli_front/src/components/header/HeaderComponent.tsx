import logo from '../../assets/img/Logo_ML.png';
import { SearchComponent } from '../search/SearchComponent';

export const HeaderComponent = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo" />
        <SearchComponent/>
      </div>
    </header>
  )
}
