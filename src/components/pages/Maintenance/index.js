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
      <h1 className={style.heading}>Site en maintenance</h1>
      <div className={style.content}>
        <p className={style.paragraph}>
          Désolé le site en maintenance pour le moment, nous revenons très vite
        </p>
      </div>
    </main>
  );
};

export default MantenancePage;