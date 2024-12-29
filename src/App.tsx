import Header from "./components/header";
import ContainerWidth from "@/components/container/container-wrap-width";

import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <main className="max-h-[90vh] overflow-scroll">
        <ContainerWidth>
          <HomePage />
        </ContainerWidth>
      </main>
    </>
  );
}

export default App;
