
import React from "react"
import Collapse from "react-bootstrap/Collapse"


class LearnMore extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            open:false,
        }
    }

    render(){
    return(
        <div >
            <div style={{bottomBorder:"1px solid",display:"flex", flexDirection:"row"}}>
                <div style={{cursor:"pointer"}} onClick={() => {
                        this.setState(prevState => ({ open: !prevState.open}))
                    }}>
                    <p style={{textDecoration:"underline", color:"white"}}>Learn more</p> 
                    
                </div>
            </div>


            <Collapse in={this.state.open}>
                <div id="example-collapse-text">
                    {this.props.answer}
                </div>
            </Collapse>
        </div>
    )
    }
}

export default LearnMore
