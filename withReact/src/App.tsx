import DummyText from "./components/DummyText";
import DragAndDrop from "./components/DragAndDrop";
import ScrollingProgress from "./components/Scroll/ScrollingProgress";
import ProfileCard from "./components/ProfileCard";
function App() {
  return (
    <>
      <ScrollingProgress />
      <ProfileCard/>
      <DragAndDrop />
      <DummyText />
    </>
  );
}

export default App;
