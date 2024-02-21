import { Box, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChangingImages from "./ui/ChangingImages";

const PostPage = () => {
  const { id: _id } = useParams();
  const [dataFromServer, setDataFromServer] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        console.log(_id);
        const { data } = await axios.get(`/posts/${_id}`);
        console.log(data);
        setDataFromServer(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Fragment>
      {dataFromServer && (
        <Grid container>
          <Grid item sm={12} md={6}>
            left detail
          </Grid>
          <Grid item sm={12} md={6}>
            <ChangingImages images={dataFromServer.game.images} />
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};
export default PostPage;
