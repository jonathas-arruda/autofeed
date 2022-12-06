import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Fulano de Tal"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, perferendis."
      />
    </div>
  );
}
