import { ThemeProvider } from "styled-components";
import "./App.css";
import {
  HookState,
  ListComponent,
  InputBox,
  ToggleSwitch,
  StopWatch,
  DynamicBackground,
  ApiFetchData,
  DynamicForm
} from "./beginner";
import { UseData } from "./context/DataContext";
import FetchingDataBreeds from "./beginner/FecthibgDataBredds";
import DistrictManager from "./beginner/Districtmanager";
import TodoApp from "./beginner/Todo";

function App() {
  return (
    <UseData>
      <div className="App">
        <h1>Level-1</h1>
        <HookState />
        <hr />

        <h1>Level -2</h1>
        <InputBox />
        <hr />

        <h1>Level -3</h1>
        <ListComponent />
        <hr />

        <h1>Level -4</h1>
        <ToggleSwitch />
        <hr />

        <h1>Level -5</h1>
        <StopWatch />
        <hr />
        
        <h1>Level -6</h1>
        <DynamicBackground />
        <hr />

        <h1>Level -7</h1>
        <ApiFetchData />
        <hr />

        <h1>Level -8</h1>
        <DynamicForm />
        <hr />

        <h1>Level -9</h1>
        <FetchingDataBreeds />
        <hr />

        <h1>Level -9</h1>
        <DistrictManager />
        <hr />

        <h1>Level -9</h1>
        <TodoApp />
        <hr />

      </div>
    </UseData>
  );
}

export default App;
