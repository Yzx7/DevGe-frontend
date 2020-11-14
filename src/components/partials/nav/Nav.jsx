import React, { useState } from "react";

const Nav = () => {
  // -----Toggle className -- La HAMBORGUESA--------
  const [condition, setCondition] = useState(false);

  return (
    <nav className="principalNav">
      <img
        src="Devge-logotipo-white.png"
        alt="logotipo devge"
        className="principalNav_img"
      />
      <div
        className={`navButton ${condition ? "navigation-open" : ""}`}
        onClick={() => setCondition(!condition)}
      >
        <section className="navigation__icon">
          <span className="topBar"></span>
          <span className="middleBar"></span>
          <span className="bottomBar"></span>
        </section>
      </div>
      <div 
        className={`principalNav_Links ${condition ? "principalNav_Links_open" : ""}`}
        >

      </div>
    </nav>
  );
};

export default Nav;
