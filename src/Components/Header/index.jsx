import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.scss';

import { faBars, faHome, faShop, faMessage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {

  const [menu, setMenu] = useState("");

  return (
    <header className={style.header}>
      <a href="/"><h1 className={style.title}>Blubee Store</h1></a>
      <FontAwesomeIcon
        icon={faBars}
        className={style.MenuIcon}
        onClick={() => (menu === "") ? setMenu(style.openMenu) : setMenu("")}
      />
      <nav className={`${style.menu} ${menu}`}>
        <ul>
          <a href="/">
            <li> <FontAwesomeIcon icon={faHome} /> Home</li>
          </a>
          <a href="/produtos">
            <li> <FontAwesomeIcon icon={faShop} /> Produtos</li>
          </a>
          <a href="/contato">
            <li> <FontAwesomeIcon icon={faMessage} /> Contato</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}
