
export function Greetings (props) {
    let greetMsg = '';
    switch (props.lang) {
      case 'en':
        greetMsg = 'Hello';
        break;
      case 'de':
        greetMsg = 'Hallo';
        break;
      case 'es':
        greetMsg = 'Hola';
        break;
      case 'fr':
        greetMsg = 'Bonjour';
        break;
      default:
        break;
    }
    return (
      <p style={{border:"2px solid black",fontWeight:"700",textAlign:"left",paddingLeft:'10px',width:'90%',marginLeft:'0.5em'}}>
        {greetMsg} {props.children}
      </p>
    )
}
