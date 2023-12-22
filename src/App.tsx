import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import SectionHeading from "./components/SectionHeading";
import Container from "./components/Container";
import User from "./components/User";
import { ThemeContextProvider } from "./components/Context/ThemeContext";
import Box from "./components/Context/Box";
import UserContextProvider from "./components/Context/UserContext";

function App() {
  const person = {
    first: "Bruce",
    last: "Wayne",
  };

  const personlist = [
    {
      first: "Clerk",
      last: "Kent",
    },
    {
      first: "Queen",
      last: "Meave",
    },
    {
      first: "Wonder",
      last: "Woman",
    },
  ];

  const buttonClickFunc = () => {
    console.log("Button Click");
  };

  const inputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <Heading>TypeScript Tutorial Beginner Level </Heading>
      <SectionHeading>
        <Heading>Messege Section </Heading>
      </SectionHeading>
      <Greet name="Noman" msgCount={2}></Greet>
      <Person name={person}></Person>
      <PersonList names={personlist}></PersonList>
      <Input text="Sunny Leone" handleChange={(e) => inputHandle(e)}></Input>
      <Button handleClick={buttonClickFunc}></Button>
      <Container
        style={{ border: "1px solid black", padding: "2px", color: "cyan" }}
        Title="Nigga"
      ></Container>
      <UserContextProvider>
        <User></User>
      </UserContextProvider>
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
