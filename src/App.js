// import Card from "./Components/card";
import Details from "./Details";


import Card from "./Components/card";

function App() {
  return (
    <div style={myStyle.mainContainer}>
      <div style={myStyle.projectName}>
        <span style={myStyle.kartavya}>Kartavya</span>
        <span style={myStyle.prastha}>Prastha</span>
      </div>

      <div style={myStyle.CardContainers}>
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card  name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
        <Card image={Details.Bhisma.image} name={Details.Bhisma.Name} />
      </div>
    </div>
  );
}

const myStyle = {
    mainContainer:{
        margin:0,
        padding:0,
        // backgroundImage:"./Components/images/mahaBharat.jpeg"
    },
  projectName: {
    color: "#FF5733",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  kartavya: {
    fontSize: 85,
  },
  prastha: {
    fontSize: 20,
    marginTop: "90px",
    marginLeft: "-60px",
  },
  CardContainers: {
    display: "grid",
    gridTemplateColumns: "200px 200px 200px 200px",
    gridGap:'2rem',
    justifyContent:'center',
    margin:'100px'
  },
};

export default App;
