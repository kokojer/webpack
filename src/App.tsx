import jpg from "@assets/image1.jpg";
import png from "@assets/image2.png";
import svg from "@assets/image3.svg?url";
import Svg from "@assets/image3.svg";
import Test from "~/folder/test";
import Comp from "~/folder/comp";

const CustomFloatingEdge = () => {
  const x = 1;
  return (
    <div className={"parent"}>
      <h1>{x}</h1>
      <h2 className={"child"}>Hello</h2>
      <h3 className={"child2"}>World</h3>
      <img src={jpg} />
      <img src={png} />
      <img src={svg} />
      <Svg />
      <Test />
      <Comp />
    </div>
  );
};

export default CustomFloatingEdge;
