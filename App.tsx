import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import TabNavigator from "./navigation/ScreenNavigator";
const App = () => {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
};

export default App;
