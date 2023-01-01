import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as style from "./Maintenance.module.scss";
const MantenancePage = () => {
  return (
    <main className={style.container}>
      <StaticImage
        objectFit={"cover"}
        className={style.maintenance_logo}
        alt={"logo"}
        src="../../../assets/images/website-maintenance.png"
      />
      <h1 className={style.heading}>Site en construction</h1>
      <div className={style.content}>
        <p className={style.paragraph}>
          Désolé le site est en construction pour le moment, revenez plus tard
        </p>
      </div>
    </main>
  );
};

export default MantenancePage;
