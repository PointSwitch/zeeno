import { Container } from "react-bootstrap"
import {AiOutlineCheck, AiOutlineArrowRight} from "react-icons/ai"

function Herobox(){
    return(
        <Container>

        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <div style={{width:"50%"}}>
                <img style={{backgroundColor:"white", width:"500px"}} src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"></img>
            </div>
            <div style={{width:"500px", marginLeft:"auto"}}>
            <h3>We Create Unique Discounts as NFTsJoin the Ecommerce Revolution.</h3>
                <p className="subTitle" style={{color:"#aba499", fontWeight:"400"}}><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Stop ticket fraud<br></br><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Create a new source of income<br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Keep track of all your coupons<br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Step into the Metaverse</p>
                <div className="normal" >
                    <h4 style={{marginTop:"80px"}}>Get notified when we launch</h4>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                    </div>
                </div>
            </div>
        </div>

        </Container>
    )
}

export default Herobox