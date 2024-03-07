import './Descricao.css'
import Batman from "../../images/batman1.jpg"

const Descricao = () => {
 
    return(
    
    <>
    
    <div className='Descricao'>
        
        <h1>BATMAN</h1>

        <div className='Batman'>
             <div>
                <img className='batman1' src= {Batman}/>
             </div>
                
                <div>
                <p>Batman, o alter ego de Bruce Wayne, é um vigilante de Gotham City que luta contra o crime utilizando seu intelecto, habilidades de detetive, e uma variedade de tecnologia avançada. 
                Após testemunhar o assassinato de seus pais quando criança, Wayne jurou dedicar sua vida à guerra contra o crime, com o objetivo de garantir que nenhuma outra criança sofra uma tragédia semelhante.
                Herdeiro da fortuna Wayne, Bruce passou anos treinando seu corpo e mente para o pico da perfeição humana. 
                Após seu retorno a Gotham, ele adotou a identidade de Batman, tornando-se o guardião sombrio da cidade. 
                Ele é um membro fundador da Liga da Justiça e mentor de vários jovens heróis, incluindo Asa Noturna, Capuz Vermelho, Robin Vermelho, seu filho Robin e Sinal.</p>
                </div>
        </div>

    </div>

    </>
   
    )
     
}
     
export default Descricao