// import DummyText from "./components/DummyText";
// import DragAndDrop from "./components/DragAndDrop";
// import ScrollingProgress from "./components/Scroll/ScrollingProgress";
// import ReactForm from "./components/Form/ReactForm";
// import SelectionPage from "./components/MultipleTagSelection/SelectionPage";
// import ProfileCard from "./components/SingleComponents/ProfileCard";
// import ReactHookForm from "./components/Form/ReactHookForm";
import ProgressBar from "./components/SingleComponents/ProgressBar";


function App() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* <ScrollingProgress />
      <DragAndDrop />
      <DummyText /> */}
      {/* <SelectionPage/> */}
      {/* <ReactForm/> */}
      {/* <ProfileCard/> */}
      {/* <ReactHookForm/> */}
      <span className="flex justify-center w-full items-center m-2 font-bold text-2xl">progress bar</span>
      <ProgressBar value={25}/>
    </div>
  );
}

export default App;
