import React from "react";
import GenericSection from "./components/genericsection";

import "../scss/modules/Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <GenericSection className="row">
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
        <div className="section"></div>
      </GenericSection>
    </footer>
  );
}
