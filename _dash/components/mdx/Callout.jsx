import Counter from './Counter.jsx';

export default class Callout extends React.Component {
  onClick() {
    Dashpad.showToast({
      message: 'hahahah'
    });
  }
  render() {
    return (
      <div className="callout callout-info">
        <br />
        <div className="h4" onClick={this.onClick}>
          9999
          <Counter />
          </div>
      </div>
    );
  }
}
