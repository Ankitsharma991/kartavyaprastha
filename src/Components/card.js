// import Details from "../src/Details";

function Card(props) {
  return (
    <div className="card">
      <img  alt="Character_Image" src={props.image}/>
      <h3 style={Style.h3}>{props.name}</h3>
    </div>
  );
}
const Style ={
  h3:{
    margin:0,
    padding:0,
    textAlign:'center',
    fontStyle:'italic'
  },
  card:{
    display:'flex',
    // justifyContent:'center',
    
  }
}
export default Card;
