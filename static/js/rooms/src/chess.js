class ChessTable extends React.Component {
  constructor(props) {
    super(props);
    this.height = window.innerHeight
    this.width = window.innerWidth
  }

  render() {
    const size = Math.min(this.width-30,this.height-30)

    const tileSize = Math.trunc(size/14)
    return (
        <div id="chess-table" style={{
          width:`${size}px`,
          height:`${size}px`
        }}>
          <Column key={0} index={0} letter={'a'} size={tileSize}/>
          <Column key={1} index={1} letter={'b'} size={tileSize}/>
          <Column key={2} index={2} letter={'c'} size={tileSize}/>
          <Column key={3} index={3} letter={'d'} size={tileSize}/>
          <Column key={4} index={4} letter={'e'} size={tileSize}/>
          <Column key={5} index={5} letter={'f'} size={tileSize}/>
          <Column key={6} index={6} letter={'g'} size={tileSize}/>
          <Column key={7} index={7} letter={'h'} size={tileSize}/>
          <Column key={8} index={8} letter={'i'} size={tileSize}/>
          <Column key={9} index={9} letter={'j'} size={tileSize}/>
          <Column key={10} index={10} letter={'k'} size={tileSize}/>
          <Column key={11} index={11} letter={'l'} size={tileSize}/>
          <Column key={12} index={12} letter={'m'} size={tileSize}/>
          <Column key={13} index={13} letter={'n'} size={tileSize}/>
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
