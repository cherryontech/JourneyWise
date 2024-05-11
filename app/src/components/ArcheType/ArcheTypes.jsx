import React from "react";
import Img from "../../assets/ArchetypeBg.png";
import ShowArcheType from "./ShowArcheType";

function ArcheTypes() {
  return (
    <section className="h-screen">
      <div
        className="bg-cover bg-center h-full bg-no-repeat"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <ShowArcheType />
      </div>
    </section>
  );
}

export default ArcheTypes;
