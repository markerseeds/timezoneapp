import { FunctionComponent } from "react";
import Header from "./components/Layout/Header";
import Calendar from "./components/Calendar/Calendar";

const App : FunctionComponent = () => {
  return (
    <main>
      <Header />
      <Calendar />
    </main>
  );
}

export default App;
