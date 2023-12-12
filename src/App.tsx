import useRouteElements from "./useRouteElements";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "normalize.css";
import "src/assets/styles/global.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ErrorBoundary from "./components/ErrorBoundary";
import { useContext } from "react";
import { AppContext } from "./contexts/app.context";
import { SwitchMode } from "./components/SwitchMode";

const theme = createTheme({
  direction: "rtl",
  // other theme properties
});

function App() {
  const routeElements = useRouteElements();
  // const { reset } = useContext(AppContext);

  // useEffect(() => {
  //   LocalStorageEventTarget.addEventListener("clearLS", reset);
  //   return () => {
  //     LocalStorageEventTarget.removeEventListener("clearLS", reset);
  //   };
  // }, [reset]);
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <ErrorBoundary>{routeElements}</ErrorBoundary>
        <ToastContainer />
        <SwitchMode styleClass="" telephone />
        <div className="flex items-center justify-between">
          <SwitchMode styleClass="bottom-32" />
          <span className="transition-all text-lg w-[90px] font-bold bg-red-500 px-4 py-2 text-white flex fixed bottom-12 left-24 z-[999999999999999] rounded-full cursor-pointer hover:scale-110 active:scale-100">
            090 668 8130
          </span>
        </div>
        <SwitchMode styleClass="right" telephone />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;

