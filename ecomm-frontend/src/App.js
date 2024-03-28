import AppRouter from "./Routes/AppRouter";
import { ToastContainer } from "react-toastify";
import ProductContextProvider from "./utils/ContextStoreData/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <div className="App">
        <AppRouter />
        <ToastContainer />
      </div>
    </ProductContextProvider>
  );
}

export default App;
