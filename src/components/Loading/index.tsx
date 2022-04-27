import ReactLoading from "react-loading";

import "./style.scss";

const Loading = () => (
  <main>
    <div className="loading">
      <ReactLoading type={"spin"} />

      {/* height={"10%"} width={"20%"} */}
    </div>
  </main>
);

export { Loading };
