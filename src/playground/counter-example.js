class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      //count: props.count
      count: 0
    };
  }

  componentDidMount() {
    //console.log('componentDidMount - fetching data...');
    try {
      const count = parseInt(localStorage.getItem('count'));
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
      //console.log('componentDidUpdate - saving data... prevProps:', prevProps, '; prevState: ', prevState);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
/*
Counter.defaultProps = {
    count: 0
};
*/
const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);
//ReactDOM.render(<Counter count={5}/>, appRoot);

/*
let count = 0;
//<button id="my-id" className="button">+1</button>
//(x) => x * x
const addOne = () => {
    count++;
    console.log('addOne');
    renderCounterApp();
};
const minusOne = () => {
    count--;
    console.log('minusOne');
    renderCounterApp();
};
const reset = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
};

//console.log(templateTwo);
const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
*/