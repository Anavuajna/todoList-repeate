import { Component } from "react";

export class TodoList extends Component {
    state = {
        inputText: '',
        doList: [], 
        // checked: false
    }

    handleChange(e) {
        this.setState({inputText: e})
        console.log(e)
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    addItem(e){
        if (e === '') {
            alert('Введите текст!')
        }
        else {
            let listArray = this.state.doList;
            listArray.push(e);
            this.setState({doList: listArray, inputText: ''});
            console.log(listArray)
        }
    }

    // handleCheckboxChange(e) {
    //     console.log(e.target.checked)
    //          }
 

    crossWord(e) {
        const li = e.target;
        li.classList.toggle('crossed')
}
        
deleteItems() {
    let listArray = this.state.doList;
    listArray = [];
    console.log(listArray)
    this.setState({doList: listArray})
}

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="box">
                        <input type='text'
                        placeholder="Запиши дело"
                        onChange={(e) => {this.handleChange(e.target.value)}}
                        value={this.state.inputText}/>
                    </div>
                    <div>
                        <ul>
                        {this.state.doList.map((item,index) => (
                        <li key={index}  onClick={this.crossWord} >
                            {/* <li key={index} >
                            <span><input className="check" type="checkbox" onChange={this.state.handleCheckboxChange.bind} checked={this.state.checked}/></span> */}
                            {item}</li>))}
                        </ul>
                    </div>
                    <div className="box">
                        <button className="btn add" onClick={() => this.addItem(this.state.inputText)}>Добавить дело</button>
                    </div>
                    <div className="box">
                        <button className=" btn delete" onClick={() => this.deleteItems()}>На сегодня все</button>
                    </div>
                </form>
            </div>
        )
    }
}