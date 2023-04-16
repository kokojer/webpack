import jpg from "@assets/image1.jpg";
import png from "@assets/image2.png";
import svg from "@assets/image3.svg?url";
import Svg from "@assets/image3.svg";
import Test from "~/folder/test";
import Comp from "~/folder/comp";
import "./styles2.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

const App = () => {
  return (
    <div className={"parent"}>
      <div className={"buttons"}>
        <Link to={"/"}>/</Link>
        <Link to={"/home"}>/home</Link>
      </div>
      <StyledDiv>
        <img src={jpg} />
        <img src={png} />
        <img src={svg} />
        <Svg />
      </StyledDiv>
      <Test />
      <Comp />
    </div>
  );
};

export default App;

const StyledDiv = styled.div`
  display: flex;
  max-width: 1000px;
  padding: 20px;
  img {
    max-width: 100px;
  }
`;
