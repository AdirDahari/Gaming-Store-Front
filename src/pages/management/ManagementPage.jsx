import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RowUserComponent from "./ui/RowUserComponent";
import axios from "axios";
import ROUTES from "../../routes/ROUTES.JS";
import RowPostsComponent from "./ui/RowPostsComponent";

const ManagementPage = () => {
  const [value, setValue] = useState(1);
  const [usersFromServer, setUsersFromServer] = useState(null);
  const [postsFromServer, setPostsFromServer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let { data: usersData } = await axios.get("/users");
        setUsersFromServer(usersData);
        let { data: postsData } = await axios.get("/posts");
        console.log("postsData", postsData);
        setPostsFromServer(postsData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [usersFromServer, postsFromServer]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDeleteUser = async (_id) => {
    console.log("handleDeleteUser", _id);
  };

  const handleEditUser = (_id) => {
    navigate(`${ROUTES.VIEWPROFILE}/${_id}`);
  };

  const handleDeletePostClick = async (_id) => {
    console.log("handleDeleteCard", _id);
  };

  const handleEditPostClick = (_id) => {
    navigate(`${ROUTES.EDITPOST}/${_id}`);
  };
  const handleShowPostClick = (_id) => {
    navigate(`${ROUTES.POST}/${_id}`);
  };

  return (
    <Box maxWidth={1200} m="0 auto" sx={{ p: { sm: 0, md: 2 } }} pt={4}>
      <Typography sx={{ my: 1 }} variant="h4">
        Manage gamming store users and posts
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
          <Tab value={1} label="Users" />
          <Tab value={2} label="Posts" />
        </Tabs>
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="caption table">
          {value == 1 ? (
            <Fragment>
              <TableHead>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone</TableCell>
                  <TableCell align="left">Country</TableCell>
                  <TableCell align="left">User id</TableCell>
                  <TableCell align="right">Delete</TableCell>
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
                      country={user.address.country}
                      phone={user.phone}
                      onDeleteUser={handleDeleteUser}
                      onEditUser={handleEditUser}
                    />
                  ))}
                </TableBody>
              )}
            </Fragment>
          ) : (
            <Fragment>
              <TableHead>
                <TableRow>
                  <TableCell>Game</TableCell>
                  <TableCell align="left">Platform</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">User id</TableCell>
                  <TableCell align="right">Options</TableCell>
                </TableRow>
              </TableHead>

              {postsFromServer && (
                <TableBody>
                  {postsFromServer.map((post) => (
                    <RowPostsComponent
                      _id={post._id}
                      name={post.game.name}
                      platform={post.platform}
                      price={post.game.price}
                      userId={post.seller.userId}
                      key={post._id}
                      onShowPostClick={handleShowPostClick}
                      onDeleteCard={handleDeletePostClick}
                      onEditPost={handleEditPostClick}
                    />
                  ))}
                </TableBody>
              )}
            </Fragment>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
};
export default ManagementPage;
