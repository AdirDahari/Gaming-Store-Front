import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
  Button,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../style/ImageScale.css";
import "../../style/postPage.css";
import PopupSellerDetails from "./ui/PopupSellerDetails";
import SwiperPostImages from "./ui/SwiperPostImages";
import MyToast from "../../messages/MyToast";

const PostPage = () => {
  const { id: _id } = useParams();
  const [imageList, setImageList] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [dataFromServer, setDataFromServer] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/posts/${_id}`);
        console.log(data);
        setDataFromServer(data);
        setImageList(data.game.images);
        setOpenPopup(false);
      } catch (err) {
        MyToast.error("Something wrong, Please try again later");
        console.log(err);
      }
    })();
  }, []);

  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const handlePopupOpen = () => {
    setOpenPopup(true);
  };

  return (
    <Fragment>
      {dataFromServer && (
        <Grid container spacing={2} maxWidth={1200} sx={{ p: 5, m: "0 auto" }}>
          <Grid item sm={12} md={6} width="100%">
            <Box>{imageList && <SwiperPostImages images={imageList} />}</Box>
          </Grid>
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
        </Grid>
      )}
    </Fragment>
  );
};
export default PostPage;
