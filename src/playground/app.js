/*
const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};

const getName = obj.getName.bind(obj);
console.log(getName());
*/
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      //options: props.options
      options: []
    };
  }

  componentDidMount() {
    //console.log('componentDidMount - fetching data...');
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options && prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      //console.log('componentDidUpdate - saving data... prevProps:', prevProps, '; prevState: ', prevState);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  /*
  handleDeleteOptions() {
      this.setState(() => {
          return {
              options: []
          };
      });
  }
  */

  handleDeleteOptions() { this.setState(() => ({ options: [] })); }
  /*
  handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
          options: prevState.options.filter((option) => {
              return optionToRemove !== option;
          })
      }));
  }
  */
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer...';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

/*
IndecisionApp.defaultProps = {
    options: []
};
*/
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};
/*
class Header extends React.Component {
    render() {
        //console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
*/
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

/*
class Action extends React.Component {
    //handlePick() {
    //    alert('handlePick');
    //}
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}
*/

const Option = (props) => {
  return (
    <li>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </li>
  );
};
/*
class Option extends React.Component {
    render() {
        return (
            <li>{this.props.option}</li>
        );
    }
}
*/
///*
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {!props.options.length && <p>Please add an option to get started!</p>}
      <ul>
        {
          props.options.map((option) => (
            <Option
              key={option}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </ul>
    </div>
  );
};
//*/
/*
class Options extends React.Component {
//    constructor(props) {
//        super(props);
//        this.handleRemoveAll = this.handleRemoveAll.bind(this);
//    }

//    handleRemoveAll() {
//        console.log(this.props.options);
//        alert('removeAll');
//    }

    render() {
        //<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ul>
                    {
                        this.props.options.map((option) => <Option key={option} option={option} />)
                    }
                </ul>
            </div>
        );
    }
}
*/

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

/*
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);
*/

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//ReactDOM.render(<IndecisionApp options={['Option one', 'Option two']} />, document.getElementById('app'));
//ReactDOM.render(<User name="Robert Mulder" age="56"/>, document.getElementById('app'));



//import './utils.js';
//import subtract, { square, add } from './utils.js';

//console.log('in app.js!');
//console.log(square(4));
//console.log(add(4, 3));
//console.log(subtract(100, 81));
//console.log('abc' && 'ABC' || undefined);

//import isSenior, { isAdult, canDrink } from './person.js';
//console.log(isAdult(17));
//console.log(isAdult(18));
//console.log(canDrink(18));
//console.log(canDrink(21));
//console.log(isSenior(65));

//install => import => use
import validator from 'validator';

console.log(validator.isEmail('test@gmail.com'));

const template = <p>THIS IS JSX FROM WEBPACK</p>;
//const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.getElementById('app'));
