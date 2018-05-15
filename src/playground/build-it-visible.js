class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      isVisible: false,
      btnLabel: 'Show'
    };
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible,
        btnLabel: (!prevState.isVisible) ? 'Hide' : 'Show'
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.toggleVisibility}>{this.state.btnLabel} Details</button>
        {this.state.isVisible && <p>Hey. These are some details you can now see!</p>}
      </div>
    );
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle title='Toggle Visibility' />, appRoot);

/*
const app = {
    title: 'Toggle Visibility',
    isVisible: false,
    btnLabel: 'Show'
};

const toggleVisibility = () => {
    app.isVisible = !app.isVisible;
    app.btnLabel = (app.isVisible) ? 'Hide' : 'Show';
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{app.btnLabel} Details</button>
            {app.isVisible && <p>Hey. These are some details you can now see!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
*/