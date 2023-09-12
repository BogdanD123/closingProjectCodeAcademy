import { createContext } from "react";

const loginContext = createContext({
  username: "Bogdan",
  password: "bogdan123",
});

const LoginContextProvider = loginContext.Provider;

export default LoginContextProvider;
