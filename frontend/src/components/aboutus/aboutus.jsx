import { Container } from "react-bootstrap"
import Footer from "../misc/footer"
import Header from "../misc/navbar"

import PersonCard from "./personcard"

import Levente from "../../Images/levente.jpg"
import ErikDz from "../../Images/erikdz.jpg"
import Fryderyk from "../../Images/fryderyk.jpg"


function AboutUs(){
    return(
        <div>
            <Header/>
            <section style={{backgroundColor:"#283032"}}>
                <Container className="align-and-center" style={{justifyContent:"space-around", padding:"100px 0 200px 0", flexWrap:"wrap"}}>
                    <PersonCard image={Levente}
                    name={"Levente Ludányi"}
                    title={"Co-Founder - CTO"}
                    description={"Student of Mathematics and Computer Science at École Polytechnique de Paris. Silver medalist at the International Physics Olympiad, Head of Finance at Future: Hungary and President of the Algorithmic Trading Society at École Polytechnique "}
                    personalsite={"ludanyilevente.com"}
                     />
                    <PersonCard image={ErikDz}
                    name={"Erik Dziekonski Bautista"}
                    title={"Co-Founder - CTO"}
                    description={<p>Student of Mathematics and Computer Science at École Polytechnique de Paris. Previous founder of <a style={{color:"white"}} href="https://www.youtube.com/watch?v=x52Z6FzyzOA">EasySend</a> and creator of <a style={{color:"white"}} href="https://papersbytopic.com/">PapersByTopic</a>. Backend manager of MEDICMAT. Discovered the CVE-2018-20448 exploit. </p>}
                    personalsite={"erikdziekonski.com"}
                     />
                    <PersonCard image={Fryderyk}
                    name={"Fryderyk Sitnik"}
                    title={"Co-Founder - COO"}
                    description={"Student of Mathematics and Computer Science at École Polytechnique de Paris. Founder and President of the Board of Directors of the TeenCrunch Foundation, a non-profit startup accelerator for youth in Poland. Organized two batches of his accelerator with 9 startups in total."}
                    personalsite={""}
                     />
                </Container>
            </section>
            <Footer/>
        </div>
    )
}

export default AboutUs