import Routing from "pages";
import { withProvider } from "./providers/with-providers";

const App = () => {
  return (
    <div className="container">
      <Routing />
    </div>
  );
};

export default withProvider(App);
