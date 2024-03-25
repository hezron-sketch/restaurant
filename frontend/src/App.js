import AppRoutes from "./AppRoutes";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import { useLoading } from "./hooks/isLoading";
import { setLoadingInterceptor } from "./interceptors/loadingInterceptor";
import { useEffect } from "react";

function App() {
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ startLoading, stopLoading });
  }, []);
  return (
    <>
      <Loading />
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
