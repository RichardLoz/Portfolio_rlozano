import InfoCard from "../../Components/InfoCard/InfoCard"
import "./About.scss"

const About = () => {
  return( 
  <div className="about">
        <div className="name">
            <div>
                <h1 className="txt">
                    SO <br />BR
                </h1>
            </div>
            <h1 className="txt lg">E</h1>

            <div className="me">MI</div>
        </div>
        <div className="info">
            <InfoCard title="Sobre mi" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique! Voluptates repellat, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam?, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam?  Expedita ullam quis voluptatum numquam?, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam?"/>
 
            <InfoCard title="Educacion" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique! Voluptates repellat, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam?, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam? Expedita ullam quis voluptatum numquam?, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam?"/>

            <InfoCard title="Habilidades" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique! Voluptates repellat, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam?, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam? Expedita ullam quis voluptatum numquam?, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam?"/>

            <InfoCard title="Pasatiempos" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, similique! Voluptates repellat, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam?, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam? Expedita ullam quis voluptatum numquam?, deserunt incidunt eaque dolorum eveniet aut distinctio omnis quis eos asperiores quidem accusamus? Expedita ullam quis voluptatum numquam?"/>
        </div>
    </div>
  )
}

export default About