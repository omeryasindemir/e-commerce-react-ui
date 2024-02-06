import React from 'react'

const Header = () => {
  return (
    <header>
    <div className="header__top">
      <div className="ht_in mailler">
        <li><i className="bi bi-envelope"></i><a href="#">info@deneme.com</a></li>
        <li>
          <i className="bi bi-envelope"></i><a href="#">deneme@gmail.com</a>
        </li>
        <li>
          <i className="bi bi-telephone-fill"></i><a href="#">+905555555555</a>
        </li>
      </div>

      <div className="ht_in">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-instagram"></i>
      </div>
    </div>

    <div className="header__bottom">
      <div className="header_logo">LOGO</div>

      <div className="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li>
          <details>
            <summary>Products <i className="bi bi-caret-down-fill"></i></summary>
            <div className="p-fa">
              <div className="p_opts">option 1</div>
              <div className="p_opts">option 1</div>
              <div className="p_opts">option 1</div>
              <div className="p_opts">option 1</div>
            </div>
          </details>
        </li>
        <li><a href="#">Contact</a></li>
      </div>

      <div className="res__menu">
        <details>
          <summary className="menu_btn"><i className="bi bi-list"></i></summary>
          <div className="res_list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li>
              <details>
                <summary>
                  Products <i className="bi bi-caret-down-fill"></i>
                </summary>
                <div className="p_opts">option 1</div>
                <div className="p_opts">option 1</div>
                <div className="p_opts">option 1</div>
                <div className="p_opts">option 1</div>
              </details>
            </li>
            <li><a href="#">Contact</a></li>
          </div>
        </details>
      </div>
    </div>
    <div className="scroll_bar"></div>
  </header>
  )
}

export default Header