
import Perfil from '../Perfil/Perfil'

const Equipe = (props) => {
    return(
    <>
    <div className='perfis'>


            <h1 className='t-center'>{props.titulo}</h1>


                <Perfil img={props.img1} titulo={props.nome1}/>
                <Perfil img={props.img2} titulo={props.nome2}/>
                <Perfil img={props.img3} titulo={props.nome3}/>
                


    

    </div>

    </>
    )

}

export default Equipe;