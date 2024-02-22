import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChangingImages from "./ui/ChangingImages";
import "../../style/ImageScale.css";

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
  const handleChangeImageIndex = (e) => {
    console.log(e.target.id);
    setIndexImg(e.target.id);
  };

  return (
    <Fragment>
      {dataFromServer && (
        <Grid container sx={{ mt: 5 }}>
          <Grid item sm={12} md={6}>
            {dataFromServer && (
              <Card
                sx={{
                  bgcolor: "#F8F6F4",
                  maxWidth: 600,
                  borderRadius: "15px",
                  width: { xs: "100%", sm: "90%", lg: "80%" },
                  height: 600,
                  m: "0 auto",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      borderRadius: "15px",
                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                    }}
                    variant="h2"
                    textAlign="center"
                    fontWeight={400}
                  >
                    {dataFromServer.game.name}
                  </Typography>
                </CardContent>
                <CardContent
                  sx={{
                    bgcolor: "#E3F4F4",
                    borderRadius: "15px",
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                    mr: 2,
                    ml: 2,
                  }}
                >
                  <Typography variant="h5" fontWeight={500}>
                    Description:{" "}
                  </Typography>
                  <Typography fontSize="1.1rem">
                    {dataFromServer.game.description}
                  </Typography>{" "}
                </CardContent>
                <CardContent
                  sx={{
                    bgcolor: "#E3F4F4",
                    borderRadius: "15px",
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                    mr: 2,
                    ml: 2,
                    mt: 1,
                  }}
                >
                  <Typography variant="h5" fontWeight={500}>
                    Categories:{" "}
                  </Typography>
                  {dataFromServer.game.category.map((cate, index) => (
                    <Typography key={cate + index} fontSize="1.1rem">
                      - {cate}
                    </Typography>
                  ))}
                </CardContent>
                <CardContent
                  sx={{
                    bgcolor: "#E3F4F4",
                    borderRadius: "15px",
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                    mr: 2,
                    ml: 2,
                    mt: 1,
                  }}
                >
                  <Typography variant="h6" display="inline" fontWeight={500}>
                    Product status:{" "}
                  </Typography>
                  <Typography fontSize="1.1rem" display="inline">
                    {dataFromServer.game.productStatus}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
          <Grid item sm={12} md={6} sx={{ width: "100%" }}>
            <Box
              sx={{
                m: "0 auto",
                height: "100%",
                maxHeight: 600,
                minHeight: 600,
                maxWidth: 600,
                minWidth: 250,
              }}
            >
              {imageList && (
                <ChangingImages
                  image={imageList[indexImg]}
                  onChnageImageBackward={handleChangeImageBackward}
                  onChnageImageForward={handleChangeImageForward}
                />
              )}
            </Box>
            <Box
              sx={{
                pt: 5,
                maxHeight: 100,
                display: "flex",
                width: { xs: "100%", sm: "80%", md: "60%" },
                justifyContent: "space-evenly",
                m: "0 auto",
              }}
            >
              {imageList &&
                imageList.map((img, index) => (
                  <Box
                    className="imageMiddleScale"
                    onClick={handleChangeImageIndex}
                    id={index}
                    key={img.url + img.alt}
                    component="img"
                    src={img.url}
                    alt={img.alt}
                    sx={{
                      maxWidth: 90,
                      width: "100%",
                      border: "2px solid grey",
                      scale: "1.1",
                      borderRadius: "15px",
                    }}
                  />
                ))}
            </Box>
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};
export default PostPage;
