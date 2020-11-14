import { IconButton, makeStyles } from "@material-ui/core";
import {
  Devices,
  DevicesRounded,
  SentimentSatisfiedAlt,
  TrendingUpRounded,
} from "@material-ui/icons";
import React from "react";
import Particles from "react-particles-js";
import Typewriter from "typewriter-effect";
const useStyles = makeStyles(() => ({
  iconNosotros: {
    animationName: "ChangeColor",
    animationDuration: "20s",
    animationDirection: "alternate",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
  },
}));

const Inicio = () => {
  const screenArea = (window.screen.width * window.screen.height) / 15000;
  const classes = useStyles();

  return (
    <div className="inicioPag">
      <header className="inicioPag_header">
        <div className="inicioPag_headerContainer">
          <div className="inicioPag_headerContainer_text">
            <h5 className="inicioPag_headerContainer_text_h5">
              ¿Quieres crecer?
            </h5>
            <Typewriter
              className="inicioPag_headerContainer_text_h2"
              options={{
                strings: [
                  "Crece más rápido",
                  "No tengas miedo al éxito",
                  "Ayudamos a emprendedores",
                ],
                autoStart: true,
                loop: true,
                cursorClassName: "inicioPag_headerContainer_text_h2",
                wrapperClassName: "inicioPag_headerContainer_text_h2",
              }}
            />
          </div>
          <img
            src="GlogoTransparent.png"
            alt=""
            className="inicioPag_headerContainer_img"
          />
        </div>
        <div className="inicioPag_headerBackgroundContainer">
          <Particles
            canvasClassName="inicioPag_headerBackground"
            params={{
              particles: { number: { value: screenArea.toFixed() } },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onHover: { mode: "grab", enable: true },
                },
              },
            }}
          />
        </div>
        {/* <div className="inicioPag_headerBackground"></div> */}
      </header>
      <section className="inicioPag_section_services">
        <h2 className="inicioPag_section_services_title">Nosotros</h2>
        <p className="inicioPag_section_services_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit
          commodi sit laborum impedit tempora dolores inventore sint enim
          repellendus.
        </p>
        <div className="inicioPag_section_card_container">
          <div className="inicioPag_section_card">
            {/* <i className="fas fa-users"></i> */}
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              className={classes.iconNosotros}
            >
              <SentimentSatisfiedAlt
                style={{ fontSize: 100 }}
                className={classes.iconNosotros}
              />
            </IconButton>
            <h3 className="inicioPag_section_card_title">
              Asesoramiento tecnológico
            </h3>
            <p className="inicioPag_section_card_description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ab
              rerum perspiciatis, qui fugiat ducimus magnam accusamus voluptas
              aliquid delectus.
            </p>
          </div>
          <div className="inicioPag_section_card">
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              className={classes.iconNosotros}
            >
              <DevicesRounded
                style={{ fontSize: 100 }}
                className={classes.iconNosotros}
              />
            </IconButton>
            <h3 className="inicioPag_section_card_title">
              Inserción en el mundo digital
            </h3>
            <p className="inicioPag_section_card_description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, perferendis voluptas! Minus, deleniti! Assumenda rerum
              esse, ipsum praesentium deleniti atque aspernatur vel, aut
              perferendis porro odio saepe magni sequi ut.
            </p>
          </div>
          <div className="inicioPag_section_card">
          <IconButton
              color="primary"
              aria-label="add to shopping cart"
              className={classes.iconNosotros}
            >
              <TrendingUpRounded
                style={{ fontSize: 100 }}
                className={classes.iconNosotros}
              />
            </IconButton>
            <h3 className="inicioPag_section_card_title">Crece tu negocio</h3>
            <p className="inicioPag_section_card_description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, perferendis voluptas! Minus, deleniti! Assumenda rerum
              esse, ipsum praesentium deleniti atque aspernatur vel, aut
              perferendis porro odio saepe magni sequi ut.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
