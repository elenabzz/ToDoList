import { Component } from 'react';


export class Todolist extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            list: []
        }
    }
    handleChange(e) {
        this.setState({userInput: e})
    }

    handleClick(input) {
        if (input === '') {
            alert("Please add an item");
        }
        else {
        let listArray = this.state.list;
        listArray.push(input);
        this.setState({list: listArray, userInput: ''})
    }}

    deleteClick() {
        let listArray = this.state.list;
        listArray = [];
        this.setState({list: listArray});
    }

    handleCross(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='container'>
                        <input type='text' placeholder='What do you want to do?'
                        onChange={(e) => this.handleChange(e.target.value)}
                        value={this.state.userInput} />
                    </div>

                    <div className='container'>
                        <button onClick={() => this.handleClick(this.state.userInput)} className='btn-add'>Add</button>
                    </div>
                    <ul>
                        {this.state.list.map((item, index) => (
                            <li onClick={this.handleCross} key={index}>✔️{item}</li>
                        ))}
                    </ul>
                    <div className='container'>
                        <button onClick={() => this.deleteClick()} className='btn-delete'>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}