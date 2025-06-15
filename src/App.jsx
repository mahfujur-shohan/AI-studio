import Header from "./components/Header/Header";
import SearchInput from "./components/Search/SearchInput";
import AdvancedSettings from "./components/Settings/AdvancedSettings";

function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        <div className="fixed -bottom-1/4 -right-0">
          <div className="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px]"></div>
        </div>

        <main className="relative z-10">
          <h2 className="text-4xl font-bold mb-8">
            Let's create a masterpiece, Alvian! <span class="text-2xl">👋</span>
          </h2>

          <SearchInput />

          <AdvancedSettings />
        </main>
      </div>
    </>
  );
}

export default App;
