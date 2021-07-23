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
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    render() {
        const { monsters, searchField } = this.state;
        const filterMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
        return (
            <div className="App" >
                <h2>Monsters Rolodex</h2>

                <SearchBox placeholder='Search monster' handleChange={e => {
                    this.setState({ searchField: e.target.value })
                }
                } />
                <CardList monsters={filterMonsters}></CardList>

            </div>
        );
    }
}


export default App;


