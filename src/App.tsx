import "./App.css";
import { Provider } from "react-redux";
import store from "./store/thameContext";
import Dashboard from "./page/admin/Dashboard";

function App() {
  return (
    <>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  );
}

export default App;
