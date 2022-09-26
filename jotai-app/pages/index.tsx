// import Addition from "../components/Addition";
import { Provider } from "jotai";
import FullName from "../components/FullName";
import Name from "../components/Name";

const HomePage = () => {
  return (
    <div>
      <h1>Jotai app</h1>
      <Provider>
        <Name />
        <FullName />
      </Provider>
      <Provider>
        <Name />
        <FullName />
      </Provider>
      {/* <Addition /> */}
    </div>
  );
};

export default HomePage;
