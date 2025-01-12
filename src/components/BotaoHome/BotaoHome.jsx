import './BotaoHome.css'

const BotaoHome = (props) => {
    return(
        <button className='botaoHome'>
        {props.texto}
        </button>
    )
}

export default BotaoHome;