import './Descricao2.css'
import MULHERGATO from '../../images/batman2.jpg'

const Descricao2 = () => {
 
    return(
    
    <>
    
    <div className='Descricao'>
        
        <h1>BATMAN</h1>

        <div className='Batman'>
             <div>
                <img className='batman2' src= {MULHERGATO}/>
             </div>
                
                <div>
                <p>Selina Kyle é uma mulher solitária, amante de gatos, que não tem muitas companhias na vida além de seus animais. Outro fator fundamental que caracteriza essa vigilante é sua faceta criminosa. Não é por acaso que, em todas as aparições nas diferentes versões do longa, Batman a encontra na cena do crime e, a partir daí, começa seu relacionamento com ela.
                   Outro detalhe importante é que a Mulher-Gato representa os dois lados da moeda: ela é obstáculo nas missões do Batman ao mesmo tempo em que também é sua aliada e amante.</p>
                </div>
        </div>

    </div>

    </>
   
    )
     
}
     
export default Descricao2