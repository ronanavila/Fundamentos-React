import { Post } from "./Post.jsx";
import { Header } from "./components/Header.jsx";
import "./styles.css";
export function App() {
  return (
    <>
      <Header />
      <Post
        author="Batman da Silva"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium magnam. Minima laborum doloribus maiores illo voluptatibus animi illum quasi quis expedita ut, cumque nemo nihil soluta, laudantium, obcaecati voluptatum?"
      />
      <Post
        author="Robin Fernandes"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, praesentium magnam. Minima laborum doloribus maiores illo voluptatibus animi illum quasi quis expedita ut, cumque nemo nihil soluta, laudantium, obcaecati voluptatum?"
      />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
}
