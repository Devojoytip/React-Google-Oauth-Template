import Login from "./components/Login";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientID = '';
  return (
    <>
      <GoogleOAuthProvider clientId={clientID}>
        <Login></Login>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
