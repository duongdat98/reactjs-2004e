
class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                <h3 style={{color:this.props.color}}>Guessing Random Number</h3>
                <p>I generate a numner in range {this.props.start} - {this.props.end}, can you guess it?</p>
                </div> 
            </div>
        );
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guessing: 0,
            target: this.random(),
            message: ""
        };
    }

    newGame = () => {
        this.setState({
            guessing: 0,
            target: this.random(),
            message: ""
        })
    }

    random = () => {
        const {start, end} = this.props;
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }

    onGuessingChange = (event) => {
        let guessing = Number(event.target.value);
        if(Number.isNaN(guessing)){
            guessing = 0;
        }
        this.setState({
            guessing
        })
    }

    guess = () => {
        let {guessing, target} = this.state;
        let {counter} = this.props;
        counter++;
        let message = "";
        if (guessing < target) {
            message = "Your guessing is smaller"

            
        } else if (guessing > target) {
            message = "Your guessing is bigger"
        } else {
            
            alert("You win with " + counter + "times")
            this.newGame()
        }
        if(counter >= 10 && message != "") {
            setTimeout(() => {
                alert("You lose")
                this.newGame();
            }, 100);
            this.setState({counter})
        }

        this.setState({message, counter})
    }

    render() {
        const {guessing, message} = this.state; //object destructuring
        const {counter} = this.props;
        return (
            <div>
                <div className="body text-center">
                <button className="btn btn-success" onClick={this.newGame}>New Game</button>
                <hr/>
                <p>Số lần bạn đã đoán: {counter}</p>
                <p>Số bạn đoán là: </p>
                <input className="ml-5" type="number"  onChange={this.onGuessingChange}/>
                <button onClick={this.guess} className="btn btn-primary ml-2">Đoán</button>
                <p>{message}</p>
            </div>
            </div>
        );
    }
}



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            start: 1,
            end: 100,
            counter: 0,
        }
    }

    updateCounter = (counter) => {
        this.setState({
            counter: counter
        })
    }
    render() {
        const  {start, end, counter} = this.state;

        return (
        <div>
            <Header start={start} end={end} updateCounter={this.updateCounter}/>
            <Body updateCounter={this.updateCounter} counter={counter}  start={start} end={end}/>
        </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))
