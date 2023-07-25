import logo from './logo.svg';
import Header from './componets/common/Header';
import Content from './componets/common/Content';
import List from './componets/starwars/List';
import Button from './Button';
import Posts from'./componets/railsposts/Posts';
import './App.css';

function App() {
  return (
    <>
        <Header /> 
        <main>
            <Content />
            <Button color="red" msg="ログイン" width= "500px"/>
            <Button  color="blue" msg = "会員登録" width= ""/>
            <input type= "text" />
            <div className="posts">
              <List />
              <Posts />
            </div>
        </main>
        <footer></footer>
    </>
  )
}
export default App;