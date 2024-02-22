import React from "react";
import Mainmenu from "./Mainmenu";
import { Carousel, CarouselItem } from "./carousel";
import styles from "../Advstyles.module.css";

const Mainpage = (props) => {
  return (
    <section className={styles.mainbody}>
      <div class="grid-container">
        <div class="item1">Header</div>
        <div class="item2">Menu</div>
        <div class="item3">Main</div>
        <div class="item4">Footer</div>
      </div>
      <nav>
        Welcome: {props.username} <button>Logout</button>{" "}
      </nav>
      <Mainmenu />
    </section>
  );
};

export default Mainpage;
