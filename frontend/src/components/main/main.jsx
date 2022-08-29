import React from "react"
import Header from "../misc/navbar"
import Footer from "../misc/footer"
import { Container,Row,Col,Collapse } from "react-bootstrap"
import {AiOutlineCheck, AiOutlineArrowRight} from "react-icons/ai"
import LearnMore from "./learnmore"

import TicketImage from "../../Images/eth.png"
import Cursor from "../../Images/cursor.png"
import NFT from "../../Images/nft.png"
import Metaverse from "../../Images/vr-glasses.png"

import Particles from "react-tsparticles"
import axios from "axios"
import Particulas from "./particulas"
class Main extends React.Component{

    constructor(props) {
    super(props);
    this.state = { 
        windowWidth: window.innerWidth,
        email:"",
        message:""
     };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.eraseMessage = this.eraseMessage.bind(this)
    }

    handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
    } 

    eraseMessage(){
        this.setState({message:""})
    }

    handleSubmit(event) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(this.state.email)){
        const payload = {"email":this.state.email}
        axios.post("https://zeeno.app", payload)
        .then(response => {
            console.log("success")
        this.setState({email:"",message:"Succesfully submitted."})
        setTimeout(this.eraseMessage, 4000)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
        event.preventDefault();
    }
  }



    handleChange(event){
        const {name,value,type,checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]: value})
    }


    render(){
        const { windowWidth } = this.state; 

    return(
        <div>
            <Header></Header>

            <section style={{paddingTop:"100px", backgroundColor:"#283032", paddingBottom:"100px"}}>
            <Container style={{padding:"0 10px 0 10px"}}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{width:"1000px",display:"flex", flexDirection:"row", justifyContent:"center",justifyItems:"center",alignContent:"center"}}>

                        <div style={{width:"50%"}} className="display-small-main">
                            <h2>Increase the Return Rate on Your Discounts.<br></br>Join the Ecommerce Revolution.</h2>
                            <p>We convert your discounts into NFTs to: </p>
                            <p className="subTitle">
                                <AiOutlineCheck/> Allow your discounts to be traded.<br></br>
                                <AiOutlineCheck style={{marginLeft:"20px"}}/> Make money from each transaction.<br></br>
                                <AiOutlineCheck/> Track all of your coupons.<br></br>
                                <AiOutlineCheck/> Step into the Metaverse.</p>
                            <div className="normal" >

                                <h4 style={{marginTop:"80px"}}>Get notified when we launch</h4>
                                <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                                    <input onChange={this.handleChange} value={this.state.email} name="email" placeholder="Your email address"/>
                                    <span onClick={this.handleSubmit} className="email-button" style={{marginLeft:"10px"}}>Get notified <AiOutlineArrowRight/> </span>
                                </div>
                                <p style={{color:"#018a38"}}> {this.state.message}</p>
                                { (windowWidth < 821) ?  <Particulas style={{top:"-100px"}} className="disappear2"/> : null}

                            </div>
                        </div>
                        <div className="second-div-main" style={{height:"400px",width:"50%",paddingLeft:"30px", position:"relative" }}>
                           <Particulas/> 
                           <img  src={TicketImage} className="object" style={{width:"300px", left:"100px"}}/>
                        </div>

                    </div>
                </div>
                
            </Container>
            </section>

            <section style={{paddingTop:"50px"}} >
                <Container style={{width:"100%"}}>
                    <div style={{maxWidth:"600px"}}>
                        <h2>Say hello to the future of Ecommerce</h2>
                    </div>

            {/* Hero 1 */}
            <Row style={{padding:"60px 0 60px 0"}}>
                <Col md={6} xs={{order:1}} style={{display:"flex", justifyContent:"center"}}>
                    <img style={{ width:"300px",marginBottom:"50px", maxHeight:"300px"}} src={NFT}></img>

                </Col>
                <Col md={6} xs={{order:2}}>
                <h3>Make Your Coupons Unique, Exchangable and Web3.0</h3>
                    <p className="subTitle" style={{color:"#aba499", fontWeight:"400"}}>
                        <AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> The end of coupon fraud -> It's an NFT: Uniqueness in the web <br></br>
                        <AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Win revenue from transactions -> Users trade coupons on NFT markets<br/>
                        <AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Get more user data -> Track ownership, pricing and trade of coupons<br/>
                        <AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Custom loyalty programs for coupon holders</p>
                    <div className="normal" >
                        {/*<h4 style={{marginTop:"40px"}}>Users trade coupons:</h4>*/}
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                        </div>
                        <LearnMore answer={<p>The coupons themselves are <a href='https://en.wikipedia.org/wiki/Non-fungible_token'>NFTs</a>. Instead of users inputting a series of words/characters, they will instead have an NFT they can use with a single click on checkout. 
                        Users will be able to trade it between them or on terciary NFT markets such as <a href="https://opensea.io/">OpenSea</a>. From this, we can include that you win money from every ticket exchange that occurs. They sell their coupon, you get part of the money. 
                         On top of this, it stops ticket fraud. A user who was originally intending to pay full price for your product,
                          can't simply search for a discount code online or use an extension to cut 30% off your revenue. Lastly, you will get detailed data of who purchases and owns the discount tickets and will be able to control the exact amount on the market.</p>}/>

                    </div>
                </Col>
            </Row>


            {/*Hero 2*/}
            <Row style={{padding:"60px 0 60px 0"}}>
                <Col  xs={{order:2}} md={{span:6,order:2}}>
                <h3>Convert Your Discounts Into NFTs With a Single Click.</h3>
                    <p className="subTitle" style={{color:"#aba499", fontWeight:"400"}}> <AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> No need to modify backend code.<br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> We handle all installation, in less than 15 minutes. <br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Do it once, have it forever without maintenance. <br/></p>
                    <div className="normal" >
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                        </div>
                        <LearnMore answer="Our installation team will get in contact with you and you can either choose to install it yourself or let our team handle the process. All it is needed for our product to run flawlessly is a single line of HTML code."></LearnMore>
                    </div>
                </Col>
                <Col xs={{order:1}} md={{span:6,order:2}} style={{display:"flex", justifyContent:"center"}}> 
                    <img style={{ width:"300px", marginBottom:"50px"}} src={Cursor}></img>
                </Col>
            </Row>

            {/* Input email */}
            <div className="align-and-center" className="caja-email">
                <h3 style={{textAlign:"center"}}>Get notified when we launch!</h3>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <input onChange={this.handleChange} value={this.state.email} name="email" placeholder="Your email"></input>
                    <span onClick={this.handleSubmit} className="button2">Remember me <AiOutlineArrowRight/> </span>
                </div>
                <p style={{textAlign:"center",margin:"10px 0 0 0 ",color:"#018a38"}}> {this.state.message}</p>
            </div>

            {/* Hero 3 */}
            <Row style={{padding:"200px 0 60px 0"}}>
                <Col md={6} xs={{order:1}} style={{display:"flex", justifyContent:"center"}}>
                    <img style={{ width:"300px", marginBottom:"50px"}} src={Metaverse}></img>

                </Col>
                <Col md={6} xs={{order:2}}>
                <h3>Stepping into the metaverse.</h3>
                    <p className="subTitle" style={{color:"#aba499", fontWeight:"400"}}>
                        <AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Join the new revolution, only with the benefits.<br></br>
                        <AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Get ahead of your competition<br/>
                        <AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Forget about staying behind.<br/>
                    </p>
                    <div className="normal" >
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                        </div>
                        <LearnMore answer={<p>The Metaverse; the new internet. Big brands are moving into it. H&M are launching their products on their metaverse, Facebook (now Meta) has invested more than $2 billion into the concept. Get into it with our help by increasing your revenue and sacrificing nothing on the way. So, join the revolution.</p>}/>
                    </div>
                </Col>
            </Row>



                </Container>
            </section>
            <Footer></Footer>
        </div>
    )
    }
}

export default Main


