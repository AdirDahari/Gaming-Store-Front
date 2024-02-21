import { Box, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChangingImages from "./ui/ChangingImages";

const PostPage = () => {
  const { id: _id } = useParams();
  const [indexImg, setIndexImg] = useState(0);
  const [imageList, setImageList] = useState([]);
  const [dataFromServer, setDataFromServer] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        console.log(_id);
        const { data } = await axios.get(`/posts/${_id}`);
        console.log(data);
        setDataFromServer(data);
        setImageList(data.game.images);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleChangeImageForward = () => {
    console.log("indexImg", indexImg);
    if (indexImg == imageList.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  };
  const handleChangeImageBackward = () => {
    if (indexImg == 0) {
      setIndexImg(imageList.length - 1);
    } else {
      setIndexImg(indexImg - 1);
    }
  };

  return (
    <Fragment>
      {dataFromServer && (
        <Grid container>
          <Grid item sm={12} md={6}>
            left detail
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{ width: 600, height: 600, overflow: "hidden" }}>
              {imageList && (
                <ChangingImages
                  image={imageList[indexImg]}
                  onChnageImageBackward={handleChangeImageBackward}
                  onChnageImageForward={handleChangeImageForward}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};
export default PostPage;
