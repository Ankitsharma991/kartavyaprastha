import img1 from "./images/arhuna.jpeg";
import BgImg from "./images/mahaBharat.jpeg";
import Details from "../Details";

import Card from "./card";

function Home() {
  return (
    <div style={myStyle.mainContainer}>
      <div style={myStyle.projectName}>
        <span style={myStyle.kartavya}> Kartavya </span>{" "}
        <span style={myStyle.prastha}> Prastha </span>{" "}
      </div>{" "}
      <div style={myStyle.CardContainers}>
        <Card image={img1} name={Details.Bhisma.Name} />{" "}
        <Card image={img1} name={Details.Krishna.Name} />{" "}
        <Card image={img1} name={Details.Dhritrastra.Name} />{" "}
        <Card image={img1} name={Details.Karna.Name} />{" "}
        <Card image={img1} name={Details.Dronacharya.Name} />{" "}
        <Card image={img1} name={Details.Duryodhana.Name} />{" "}
        <Card image={img1} name={Details.Kripacharya.Name} />{" "}
        <Card image={img1} name={Details.Eklavya.Name} />{" "}
        <Card image={img1} name={Details.Yudhishthira.Name} />{" "}
        <Card image={img1} name={Details.Bhima.Name} />{" "}
        <Card image={img1} name={Details.Arjuna.Name} />{" "}
        <Card image={img1} name={Details.Nakul_and_Sahdev.Name} />{" "}
        <Card image={img1} name={Details.Draupadi.Name} />{" "}
        <Card image={img1} name={Details.Abhimanyu.Name} />{" "}
        <Card image={img1} name={Details.Ashwatthama.Name} />{" "}
        <Card image={img1} name={Details.Bhisma.Name} />{" "}
      </div>{" "}
    </div>
  );
}

const myStyle = {
  mainContainer: {
    margin: 0,
    padding: 0,
    background: `url(${BgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"contain",
    flex:1,
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
    gridGap: "4rem",
    justifyContent: "center",
    margin: "100px",
  },
};

export default Home;
