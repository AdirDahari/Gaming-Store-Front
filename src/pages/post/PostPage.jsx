import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostPage = () => {
  const { id: _id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        console.log(_id);
        const { data } = await axios.get(`/posts/${_id}`);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <Box></Box>;
};
export default PostPage;
