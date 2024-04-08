import "./App.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { GameBlock } from "./components";

function App() {
  return (
    <div className="App">
      <div className="menu-area">
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="warning" size="large">
            Start Game
          </Button>
          <Button variant="contained" color="warning" size="large">
            Restart Game
          </Button>
        </Stack>
      </div>
      <GameBlock />
    </div>
  );
}

export default App;
