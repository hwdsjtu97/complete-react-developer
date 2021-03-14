import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
// function App() {

// }

const url = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("this: ", this);
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="seach monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
