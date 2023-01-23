import Routing from "pages";
import { withProvider } from "./providers/with-providers";

const App = () => {
  return (
    <div>
      <Routing />
    </div>
  );
};

export default withProvider(App);
