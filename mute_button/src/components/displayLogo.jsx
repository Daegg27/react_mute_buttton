
// import OnLogo from '../icons/on.svg'

function DisplayLogo(props){


    return (
        <img onClick={props.function} src={props.src} alt="Help"/>
    )
}

export default DisplayLogo