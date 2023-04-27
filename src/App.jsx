import Register from "./components/Register";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <section className="signup">
          <h1>Create account</h1>
          <Register />
          <button>Register</button>
        </section>
      </main>
    </>
  );
}

export default App;
