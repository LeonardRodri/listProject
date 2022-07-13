import sytles from './Header.module.css';
import igniteLogo from '../assets/Ignite-logo.svg';


export function Header(){
  return (
    <header className={sytles.header}>
      <img src={igniteLogo}/>
    </header>
  )
}