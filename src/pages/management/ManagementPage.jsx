import { Box, Container, Divider, Tab, Tabs, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RowUserComponent from "./ui/RowUserComponent";
import axios from "axios";
import ROUTES from "../../routes/ROUTES.JS";

const ManagementPage = () => {
  const [value, setValue] = useState("one");
  const [usersFromServer, setUsersFromServer] = useState(null);
  const [postsFromServer, setPostsFromServer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let { data: usersData } = await axios.get("/users");
        setUsersFromServer(usersData);
        let { data: postsData } = await axios.get("/posts");
        setPostsFromServer(postsData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDeleteUser = async (_id) => {
    console.log("handleDeleteUser", _id);
    // try {
    //   await axios.delete("/users/" + _id);
    //   setDataFromServer((dataFromServerCopy) =>
    //     dataFromServerCopy.filter((user) => user._id !== _id)
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleEditUser = (_id) => {
    console.log(_id);
    navigate(`${ROUTES.VIEWPROFILE}/${_id}`);
  };

  const handleDeleteCard = async (_id) => {
    console.log("handleDeleteCard", _id);
    // try {
    //   let request = {
    //     bizNumber: bizNumber,
    //   };
    //   await axios.delete("/cards/" + _id, request);
    //   setDataFromServer((dataFromServerCopy) =>
    //     dataFromServerCopy.filter((card) => card._id !== _id)
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };

  return (
    <Container sx={{ minHeight: "90vh" }}>
      <Typography variant="h1">Sandbox</Typography>
      <Typography sx={{ my: 1 }} variant="h4">
        Manage bcards users and cards
      </Typography>
      <Divider />
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Users" />
          <Tab value="two" label="Cards" />
        </Tabs>
      </Box>
      <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          {usersFromServer && (
            <TableBody>
              {usersFromServer.map((user) => (
                <RowUserComponent
                  key={user._id}
                  _id={user._id}
                  name={`${user.name.first} ${user.name.last}`}
                  email={user.email}
                  phone={user.phone}
                  onDeleteUser={handleDeleteUser}
                  onEditUser={handleEditUser}
                />
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Container>
  );
};
export default ManagementPage;
