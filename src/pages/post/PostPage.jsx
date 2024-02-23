import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChangingImages from "./ui/ChangingImages";
import "../../style/ImageScale.css";
import PopupSellerDetails from "./ui/PopupSellerDetails";

const PostPage = () => {
  const { id: _id } = useParams();
  const [indexImg, setIndexImg] = useState(0);
  const [imageList, setImageList] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [dataFromServer, setDataFromServer] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        console.log(_id);
        const { data } = await axios.get(`/posts/${_id}`);
        console.log(data);
        setDataFromServer(data);
        setImageList(data.game.images);
        setOpenPopup(false);
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
  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const handlePopupOpen = () => {
    setOpenPopup(true);
  };

  return (
    <Fragment>
      {dataFromServer && (
        <Grid container spacing={2} maxWidth={1600} sx={{ p: 5, m: "0 auto" }}>
          <Grid item sm={12} md={6} width="100%">
            {dataFromServer && (
              <Card
                sx={{
                  bgcolor: "#F8F6F4",
                  maxWidth: 600,
                  borderRadius: "15px",
                  minHeight: 600,
                  m: "0 auto",
                }}
              >
                <CardContent sx={{ minHeight: 500 }}>
                  <CardContent>
                    <Typography
                      sx={{
                        borderRadius: "15px",
                        boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                      }}
                      variant="h3"
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
                      m: 1,
                      mr: 2,
                      ml: 2,
                    }}
                  >
                    <Typography variant="h6" display="inline" fontWeight={500}>
                      Categories:{" "}
                    </Typography>
                    {dataFromServer.game.category.map((cate, index) => (
                      <Typography key={cate + index} display="inline">
                        {cate +
                          (index < dataFromServer.game.category.length - 1
                            ? " | "
                            : "")}
                      </Typography>
                    ))}
                  </CardContent>
                  {dataFromServer.game.description && (
                    <CardContent
                      sx={{
                        bgcolor: "#E3F4F4",
                        borderRadius: "15px",
                        boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                        m: 1,
                        mr: 2,
                        ml: 2,
                      }}
                    >
                      <Typography variant="h6" fontWeight={500}>
                        Description:{" "}
                      </Typography>
                      <Typography>{dataFromServer.game.description}</Typography>{" "}
                    </CardContent>
                  )}
                  <CardContent
                    sx={{
                      bgcolor: "#E3F4F4",
                      borderRadius: "15px",
                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                      m: 1,
                      mr: 2,
                      ml: 2,
                    }}
                  >
                    <Typography variant="h6" display="inline" fontWeight={500}>
                      Product status:{" "}
                    </Typography>
                    <Typography display="inline">
                      {dataFromServer.game.productStatus}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      bgcolor: "#E3F4F4",
                      borderRadius: "15px",
                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                      m: 1,
                      mr: 2,
                      ml: 2,
                    }}
                  >
                    <Typography variant="h6" display="inline" fontWeight={500}>
                      Price:{" "}
                    </Typography>
                    <Typography display="inline">
                      {dataFromServer.game.price}
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions onClick={handlePopupOpen}>
                  <Button sx={{ m: "0 auto" }} variant="outlined">
                    Contact seller
                  </Button>
                </CardActions>
                {dataFromServer && (
                  <PopupSellerDetails
                    name={dataFromServer.seller.firstName}
                    city={dataFromServer.seller.city}
                    phone={dataFromServer.seller.phone}
                    open={openPopup}
                    onClose={handleClosePopup}
                  />
                )}
              </Card>
            )}
          </Grid>
          <Grid item sm={12} md={6} width="100%">
            <Card
              sx={{
                bgcolor: "#F8F6F4",
                maxWidth: 600,
                borderRadius: "15px",
                height: 600,
                m: "0 auto",
              }}
            >
              <Box
                sx={{
                  m: "0 auto",
                  height: 455,
                  width: "100%",
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
                  maxHeight: 100,
                  display: "flex",
                  width: { xs: "100%", sm: "80%", md: "60%" },
                  justifyContent: "space-evenly",
                  m: "0 auto",
                  pt: 4,
                }}
              >
                {imageList &&
                  imageList.map((img, index) => (
                    <Box
                      className="imageSmallScale"
                      onClick={handleChangeImageIndex}
                      id={index}
                      key={img.url + img.alt}
                      component="img"
                      src={img.url}
                      alt={img.alt}
                      sx={{
                        maxWidth: 70,
                        maxHeight: 70,
                        width: "100%",
                        border: "2px solid grey",
                        borderRadius: "15px",
                      }}
                    />
                  ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};
export default PostPage;
