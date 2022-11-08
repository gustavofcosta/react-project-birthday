import { data } from "./data";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main className="min-h-screen flex justify-center items-center bg-red-500">
      <section className="w-11/12 mx-auto my-10 bg-slate-50 max-w-lg p-7 rounded-xl shadow-md space-y-7">
        <h3 className="mb-10">Aniversariantes do dia</h3>
        <List people={people} />
        <button
          className="bg-red-500 hover:bg-red-400 transition-all duration-300 w-full mt-2 mx-auto mb-0 capitalize text-lg p-2 rounded-md text-white outline-2 -tracking-tighter"
          onClick={() => setPeople([])}
        >
          apagar todos
        </button>
      </section>
    </main>
  );
}

export default App;
