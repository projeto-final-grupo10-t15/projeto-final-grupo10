import { UserProvider } from "./Contexts/User";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
};

export default App;
