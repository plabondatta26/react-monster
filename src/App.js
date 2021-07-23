import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { monsters, searchField } = this.state;
        const filterMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
        return (
            <div className="App" >
                <h2 id="header-title">Monsters Rolodex</h2>

                <SearchBox
                    placeholder='Search monster'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filterMonsters}></CardList>

            </div>
        );
    }
}


export default App;


