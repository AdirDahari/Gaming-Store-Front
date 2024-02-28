import { Box, Grid, Divider, Tab, Tabs, Typography } from "@mui/material";
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
import PostComponent from "../../components/PostComponent";

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
  };

  const handleEditUser = (_id) => {
    navigate(`${ROUTES.VIEWPROFILE}/${_id}`);
  };

  const handleDeletePostClick = async (_id) => {
    console.log("handleDeleteCard", _id);
  };

  const handleEditPostClick = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };
  const handleBuyNowClick = (_id) => {
    console.log("handleBuyNowClick", _id);
  };

  return (
    <Box maxWidth={1200} m="0 auto" p={2} pt={4}>
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
      {value == 1 ? (
        <Fragment>
          <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="caption table"
            >
              <Fragment>
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
              </Fragment>
            </Table>
          </TableContainer>
        </Fragment>
      ) : (
        <Fragment>
          {postsFromServer && (
            <Grid
              container
              spacing={2}
              maxWidth={1200}
              sx={{ m: 2, p: 4, margin: "0 auto" }}
            >
              {postsFromServer.map((post) => (
                <Grid item key={post._id} xs={12} sm={6} md={4}>
                  <PostComponent
                    color="#A32CC4"
                    _id={post._id}
                    name={post.game.name}
                    price={post.game.price}
                    image={post.game.images[0].url}
                    alt={post.game.images[0].alt}
                    onBuyNowClick={handleBuyNowClick}
                    onEditClick={handleEditPostClick}
                    onDeleteClick={handleDeletePostClick}
                    isUser={true}
                    isLoggedIn={true}
                    isAdmin={true}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Fragment>
      )}
    </Box>
  );
};
export default ManagementPage;
