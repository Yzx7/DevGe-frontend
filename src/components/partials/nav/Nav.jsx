import { IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({

  navSocialMediaButton:{
    animationName: "ChangeBackground",
    animationDuration: "20s",
    animationDirection: "alternate",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    border: "solid 4px #ffffff",
  }

}));

const Nav = () => {
  // -----Toggle className -- La HAMBORGUESA--------
  const [condition, setCondition] = useState(false);
  
  const classes = useStyles();


  const ButtonNav = () => {
    return (
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
    );
  };

  return (
    <nav className="principalNav">
      <img
        src="Devge-logotipo-white.png"
        alt="logotipo devge"
        className="principalNav_img"
      />
      <div className="principalNav__buttons">
      <section className="principalNav__socialMedia">
        <div className="principalNav__socialMedia_sesgo"></div>
        <IconButton href="https://www.facebook.com/DevGe-114922780424047" aria-label="socialMedia" className={classes.navSocialMediaButton}>
        <i className="fab fa-facebook-f navSocialMediaButtonIcon"></i>
        </IconButton>

        <IconButton aria-label="socialMedia" className={classes.navSocialMediaButton}>
        <i className="fab fa-whatsapp navSocialMediaButtonIcon"></i>
        </IconButton>
        <IconButton aria-label="socialMedia" className={classes.navSocialMediaButton}>
        <i className="fab fa-instagram navSocialMediaButtonIcon"></i>
        </IconButton>
      </section>
      <ButtonNav />
      </div>
      <div
        className={`principalNav_Links ${
          condition ? "principalNav_Links_open" : ""
        }`}
      ></div>
    </nav>
  );
};

export default Nav;
