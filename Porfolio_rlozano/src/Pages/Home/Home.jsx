import "./Home.scss"
import  perfil from "../../assets/perfil.png";

const Home = () => {
  return <div className="home">
    <div className="details">
        <span className="intro">Hola, Yo soy</span>

        <div className="name">
            <div>
                <h1 className="txt">RI<br/>LO</h1>
            </div>
            <h1 className="txt lg">R</h1>
            <div className="stack">FULL-STACK <b>DEVELOPER</b></div>
        </div>
    </div>

    <div className="profile-img">
        <img src={perfil} alt="" />
    </div>

  </div>
}

export default Home