class ChessTable extends React.Component {
  constructor(props) {
    super(props);



    this.state={
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }


  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }


  render() {
    const size = Math.min(this.state.width-30,this.state.height-30)

    const tileSize = Math.trunc(size/14)
    return (
        <div id="chess-table" style={{
          width:`${size}px`,
          height:`${size}px`
        }}>
          <Column key={0} index={0} size={tileSize}/>
          <Column key={1} index={1} size={tileSize}/>
          <Column key={2} index={2} size={tileSize}/>
          <Column key={3} index={3} size={tileSize}/>
          <Column key={4} index={4} size={tileSize}/>
          <Column key={5} index={5} size={tileSize}/>
          <Column key={6} index={6} size={tileSize}/>
          <Column key={7} index={7} size={tileSize}/>
          <Column key={8} index={8} size={tileSize}/>
          <Column key={9} index={9} size={tileSize}/>
          <Column key={10} index={10} size={tileSize}/>
          <Column key={11} index={11} size={tileSize}/>
          <Column key={12} index={12} size={tileSize}/>
          <Column key={13} index={13} size={tileSize}/>
        </div>
    );
  }
}



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ChessTable />
    );
  }
}


let domContainer = document.querySelector('#rot');
ReactDOM.render(<App/>, domContainer);
