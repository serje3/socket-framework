


class Tile extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div key={this.props.index} id={this.props.index} className="tile" style={this.props.style}>

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
            width: this.width
        }
    }

    get_tiles(){
        this.height=this.props.size
        this.width=this.props.size
        if (this.props.index%2===0) {
            return (
                <div key={this.props.index}
                     id={this.props.index}
                     className="col"
                     style={{
                         height:this.height*14,
                         width:this.width
                     }}>
                    <Tile key={0} index={0} style={this.style(0)}/>
                    <Tile key={1} index={1} style={this.style(1)}/>
                    <Tile key={2} index={2} style={this.style(0)}/>
                    <Tile key={3} index={3} style={this.style(1)}/>
                    <Tile key={4} index={4} style={this.style(0)}/>
                    <Tile key={5} index={5} style={this.style(1)}/>
                    <Tile key={6} index={6} style={this.style(0)}/>
                    <Tile key={7} index={7} style={this.style(1)}/>
                    <Tile key={8} index={8} style={this.style(0)}/>
                    <Tile key={9} index={9} style={this.style(1)}/>
                    <Tile key={10} index={10} style={this.style(0)}/>
                    <Tile key={11} index={11} style={this.style(1)}/>
                    <Tile key={12} index={12} style={this.style(0)}/>
                    <Tile key={13} index={13} style={this.style(1)}/>

                </div>
            )
        }
        else{
            return (
                <div key={this.props.index}
                     id={this.props.index}
                     className="col"
                     style={{
                    height:this.height*14,
                    width:this.width
                }}>
            <Tile key={0} index={0} style={this.style(1)}/>
            <Tile key={1} index={1} style={this.style(0)}/>
            <Tile key={2} index={2} style={this.style(1)}/>
            <Tile key={3} index={3} style={this.style(0)}/>
            <Tile key={4} index={4} style={this.style(1)}/>
            <Tile key={5} index={5} style={this.style(0)}/>
            <Tile key={6} index={6} style={this.style(1)}/>
            <Tile key={7} index={7} style={this.style(0)}/>
            <Tile key={8} index={8} style={this.style(1)}/>
            <Tile key={9} index={9} style={this.style(0)}/>
            <Tile key={10} index={10} style={this.style(1)}/>
            <Tile key={11} index={11} style={this.style(0)}/>
            <Tile key={12} index={12} style={this.style(1)}/>
            <Tile key={13} index={13} style={this.style(0)}/>

                </div>
        )
        }
    }

    render() {
        return this.get_tiles()
    }
}