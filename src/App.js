import React from "react";
import './App.css';
import Post from "./component/Post";
import PostForm from "./component/PostForm";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
