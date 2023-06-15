import Lottie from "lottie-react";
import Loading from "./loading.json";

function Loader() {
  return (
    <div className="container">
      <Lottie animationData={Loading} />
    </div>
  );
}
export default Loader;