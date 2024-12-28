import Header from "./component/header";
import ContainerWidth from "@/component/container/container-wrap-width";

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
