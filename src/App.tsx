import Button from "./components/button/Button";
import { GlobalStyles } from "./style/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Button width="180px" height="50px" fontSize="20px" onClick={() => console.log("클릭")}>
        버튼 클릭
      </Button>
    </>
  );
}

export default App;
