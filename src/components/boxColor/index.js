export function BoxColor (props) {
  const color = "rgb("+props.r+ " " +props.g+ " " +props.b+")";
  return (<div style={{backgroundColor: color, width: "100px", height: "100px", border: "2px solid black"}}></div>)
}