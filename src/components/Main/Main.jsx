import Image from '../../images/batman1.jpg'
import Image2 from '../../images/batman2.jpg'
import Image3 from '../../images/batman3.jpg'
import Image4 from '../../images/batman4.jpg'
import Image5 from '../../images/batman5.jpg'
import Image6 from '../../images/batman6.jpg'
import Equipe from '../Equipe/Equipe';
import './Main.css'


const Main = () => {

    return (

        <main>
            <Equipe titulo={"Heróis"} img1={Image} nome1={"Batman"} img2={Image2} nome2={"Mulher Gato"} img3={Image3} nome3={"Alfred"}/>
            <Equipe titulo={"Vilões"} img1={Image4} nome1={"Mulher Gato"} img2={Image5} nome2={"Batman"} img3={Image6} nome3={"Batman"}/>
        </main>

    )

}

export default Main;