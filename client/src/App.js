import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { palette } from '@mui/system';
import { OutlinedInput, Button, useTheme, Typography, Box } from '@mui/material';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    // object = req.body passing the data to backend
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      // add the new user to the end of user list
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <Box 
      >
        <Typography variant="h4">
          Information Card
        </Typography>
      </Box>
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <OutlinedInput
          type="text"
          size="small"
          placeholder="Name..."
          gap="1rem"
          color='primary'
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <OutlinedInput
          type="number"
          placeholder="Age..."
          size="small"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <OutlinedInput
          type="text"
          placeholder="Username..."
          gap="1rem"
          size="small"
          color='secondary'
          border={`1px solid ${useTheme().primary}`}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Button onClick={createUser} > Create User </Button>
      </div>
    </div>
  );
}

export default App;
