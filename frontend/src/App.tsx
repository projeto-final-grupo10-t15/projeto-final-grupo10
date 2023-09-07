import CarProvider from "./Contexts/Car";
import CommentProvider from "./Contexts/Comment";
import { UserProvider } from "./Contexts/User";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <UserProvider>
      <CarProvider>
        <CommentProvider>
          <RoutesMain />
        </CommentProvider>
      </CarProvider>
    </UserProvider>
  );
};

export default App;
