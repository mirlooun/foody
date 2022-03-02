import RootNavigation from "./app/navigation";
import { Provider } from "react-redux";
import { store } from "./app/redux/index";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
