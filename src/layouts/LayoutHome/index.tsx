import illustrationImg from "../../assets/images/illustration.svg";
import { Outlet } from "react-router-dom";

import "./style.scss";

export function LayoutHome() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <div className="content">
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as duvidas de sua audiência em tempo real</p>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
