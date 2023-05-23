import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";


function App() {
  return (
    <div className="App">
      <Header />
      <Box display={"grid"} gridTemplateColumns={"95% 5%"}>
        <Box>
          <Toolbar />
          <Editor />
        </Box>
        <Box style={{ background: "#002e770a" }}>
          <Sidebar />
        </Box>
      </Box>
    </div>
  );
}

export default App;
