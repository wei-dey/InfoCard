import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { OutlinedInput, Button, Typography, Box} from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';


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
      
      <Box sx={{bgcolor:"#bee6f0"}}>
        <AnalyticsIcon  sx={{position: "absolute", left:0, top:0, fontSize:55}}>
          </AnalyticsIcon>
        <Typography variant="h4">
          InfoCard
        </Typography>
      </Box>
      <Box 
        gap={2} 
        sx={{
          mt:2,
          ml:40,
          display: "flex"
        }}
        >
        <OutlinedInput
          type="text"
          sx ={
            {
              borderColor: 'primary.main',
              height: '35px'
            }
          }
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <OutlinedInput
          type="number"
          sx ={
            {
              borderColor: 'primary.main',
              height: '35px'
            }
          }
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <OutlinedInput
          type="text"
          sx ={
            {
              borderColor: 'primary.main',
              height: '35px'
            }
          }
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Button
          variant="contained"
          size="small"
          onClick={createUser} > Create User 
        </Button>
      </Box>
      <Box gap={4} 
        sx={{
          display: "flex", 
          ml:10,
          flexDirection: 'row',
          flexWrap: 'wrap' 
          }}>
        {listOfUsers.map((user) => {
          return (
            <Box
             sx ={{
               width: "180px",
               height: "140px",
               border:"2px grey",
               mt: '30px',
               borderRadius: 4,
               bgcolor:"#bee6f0",
             }}
            >
              <h4>Name: {user.name}</h4>
              <h4>Age: {user.age}</h4>
              <h4>Username: {user.username}</h4>
            </Box>
          );
        })}
      </Box>

      
    </div>
  );
}

export default App;
