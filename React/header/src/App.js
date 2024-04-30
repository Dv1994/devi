// import logo from './logo.svg';
import './App.css';

function App() {
  const logoImageUrl ="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1709656628~exp=1709657228~hmac=c16dc25d91c1754f101070759b5cea018d3e26b4791aaa155bf5ca05dd9079ed"
  return (
    <div className="App">
      <div className="w-full bg-teal-600">
      <img src={logoImageUrl} alt="Logo" className="h-10 w-auto" />
        <nav className="flex  items-center h-16 justify-end px-20">
          <ul className="flex space-x-4 ">
            <li className="hover:text-sky-600">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-sky-600">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-sky-600">
              <a href="#Careers">Career</a>
            </li>
            <li className="hover:text-sky-600">
              <a href="#Contact">Contact Us</a>
            </li>
          </ul>
        </nav>

      </div>

    </div>
  );
}

export default App;
