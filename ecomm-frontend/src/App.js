import AppRouter from "./utils/Routes/AppRouter";
import { ToastContainer } from "react-toastify";
import ProductContextProvider from "./utils/HttpServiceStore/ContextStoreData/ProductContextProvider";

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
