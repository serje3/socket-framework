


class Tile extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id={this.props.index} className="tile" style={this.props.style} >

            </div>
        )
    }
}

class Column extends React.Component{
    constructor(props) {
        super(props);
        this.height=this.props.size
        this.width=this.props.size
    }

    style(color){
        let _color=color?'#adadad':'#dadada'
        return {
            backgroundColor: _color,
            height: this.height,
            width: 'inherit'
        }
    }

    get_tiles(){
        this.height=this.props.size
        this.width=this.props.size
        if (this.props.index%2===0) {
            return (
                <div
                     className="col"
                     style={{
                         height:this.height*14,
                         width:this.width
                     }}>
                    <Tile key={0} index={`${this.props.letter}13`} style={this.style(0)}/>
                    <Tile key={1} index={`${this.props.letter}12`} style={this.style(1)}/>
                    <Tile key={2} index={`${this.props.letter}11`} style={this.style(0)}/>
                    <Tile key={3} index={`${this.props.letter}10`} style={this.style(1)}/>
                    <Tile key={4} index={`${this.props.letter}9`} style={this.style(0)}/>
                    <Tile key={5} index={`${this.props.letter}8`} style={this.style(1)}/>
                    <Tile key={6} index={`${this.props.letter}7`} style={this.style(0)}/>
                    <Tile key={7} index={`${this.props.letter}6`} style={this.style(1)}/>
                    <Tile key={8} index={`${this.props.letter}5`} style={this.style(0)}/>
                    <Tile key={9} index={`${this.props.letter}4`} style={this.style(1)}/>
                    <Tile key={10} index={`${this.props.letter}3`} style={this.style(0)}/>
                    <Tile key={11} index={`${this.props.letter}2`} style={this.style(1)}/>
                    <Tile key={12} index={`${this.props.letter}1`} style={this.style(0)}/>
                    <Tile key={13} index={`${this.props.letter}0`} style={this.style(1)}/>
                </div>
            )
        }
        else{
            return (
                <div
                     className="col"
                     style={{
                    height:this.height*14,
                    width:this.width
                }}>
            <Tile key={0} index={`${this.props.letter}13`} style={this.style(1)}/>
            <Tile key={1} index={`${this.props.letter}12`} style={this.style(0)}/>
            <Tile key={2} index={`${this.props.letter}11`} style={this.style(1)}/>
            <Tile key={3} index={`${this.props.letter}10`} style={this.style(0)}/>
            <Tile key={4} index={`${this.props.letter}9`} style={this.style(1)}/>
            <Tile key={5} index={`${this.props.letter}8`} style={this.style(0)}/>
            <Tile key={6} index={`${this.props.letter}7`} style={this.style(1)}/>
            <Tile key={7} index={`${this.props.letter}6`} style={this.style(0)}/>
            <Tile key={8} index={`${this.props.letter}5`} style={this.style(1)}/>
            <Tile key={9} index={`${this.props.letter}4`} style={this.style(0)}/>
            <Tile key={10} index={`${this.props.letter}3`} style={this.style(1)}/>
            <Tile key={11} index={`${this.props.letter}2`} style={this.style(0)}/>
            <Tile key={12} index={`${this.props.letter}1`} style={this.style(1)}/>
            <Tile key={13} index={`${this.props.letter}0`} style={this.style(0)}/>
                </div>
        )
        }
    }

    render() {
        return this.get_tiles()
    }
}


