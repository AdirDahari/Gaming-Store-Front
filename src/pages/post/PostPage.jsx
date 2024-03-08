import { Box, Grid, Divider, Button } from "@mui/material";
import "../../style/postPage.css";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MyToast from "../../messages/MyToast";
import PopupSellerDetails from "./ui/PopupSellerDetails";
import nextId from "react-id-generator";

const ItayPostPage = () => {
  const { id: _id } = useParams();
  const [dataFromServer, setDataFromServer] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [mainImage, setMainImage] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/posts/${_id}`);
        console.log(data);
        setDataFromServer(data);
        setMainImage(data.game.images[0].url);
        setOpenPopup(false);
      } catch (err) {
        MyToast.error("Something wrong, Please try again later");
        console.log(err);
      }
    })();
  }, []);

  const handleImageIndexChange = (e) => {
    console.log(e.target.id);
    setImageIndex(e.target.id);
    setMainImage(dataFromServer.game.images[e.target.id].url);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const handlePopupOpen = () => {
    setOpenPopup(true);
  };

  return (
    <Box pt={4} pb={4}>
      <Box sx={{ maxWidth: 1200 }} className="postpage-container">
        {dataFromServer && (
          <Grid container sx={{ pb: 4, pt: 4 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{
                display: "flex",
                minHeight: 600,
                alignItems: "center",
                flexDirection: { xs: "column-reverse", sm: "row" },
              }}
            >
              <Box className="postpage-image-list">
                {dataFromServer.game.images.map((img, index) => (
                  <Fragment key={nextId()}>
                    <Box
                      id={index}
                      onClick={handleImageIndexChange}
                      className="post-image-item"
                      sx={{
                        background:
                          index == imageIndex
                            ? `url(${img.url}), #fff 50%`
                            : `linear-gradient(0deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.28) 100%), url(${img.url}), #fff 50% / cover no-repeat`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                    {index !== dataFromServer.game.images.length - 1 && (
                      <Divider />
                    )}
                  </Fragment>
                ))}
              </Box>

              <Box
                sx={{
                  background: `url(${mainImage}), #fff 50%`,
                  backgroundRepeat: "no-repeat",
                  m: "0 auto",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                className="postpage-main-image"
              ></Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ minHeight: 600 }}>
              <Box className="postpage-details-top">
                <Box className="postpage-details-title">
                  <p className="postpage-details-title-text">
                    {dataFromServer.game.name}
                  </p>
                </Box>
                <Box className="postpage-details-price-container">
                  <p className="postpage-details-price-text">
                    ₪{dataFromServer.game.price}
                  </p>
                </Box>
              </Box>
              <Box className="postpage-details-cate">
                <p className="postpage-details-cate-title">Category:</p>
                {dataFromServer.game.category.map((cate, index) => (
                  <p
                    className="postpage-details-cate-des"
                    key={nextId()}
                    display="inline"
                  >
                    {cate +
                      (index < dataFromServer.game.category.length - 1
                        ? " | "
                        : "")}
                  </p>
                ))}
                <Box sx={{ pt: 4 }}>
                  <p className="postpage-details-product-title">
                    Product status:
                  </p>
                  <p className="postpage-details-cate-des">
                    {dataFromServer.game.productStatus}
                  </p>
                </Box>
              </Box>
              {dataFromServer.game.description ? (
                <Box className="postpage-details-bottom">
                  <p className="postpage-details-bottom-title">Description</p>
                  <p className="postpage-details-bottom-des">
                    {dataFromServer.game.description}
                  </p>
                </Box>
              ) : (
                <Box sx={{ minHeight: "150px" }}></Box>
              )}
              <Box sx={{ pr: { xs: 4, sm: 8 }, pt: 4 }}>
                <Button
                  onClick={handlePopupOpen}
                  variant="contained"
                  sx={{
                    float: "right",
                    borderRadius: "50px",
                    pr: 5,
                    pl: 5,
                    bgcolor: "#000",
                    color: "#fff",
                    boxShadow: `0px 4.739px 23.694px 0px rgba(0, 0, 0, 0.25)`,
                  }}
                >
                  <p className="postpage-btn-text">Contact Seller</p>
                </Button>
                <PopupSellerDetails
                  city={dataFromServer.seller.city}
                  name={dataFromServer.seller.firstName}
                  phone={dataFromServer.seller.phone}
                  open={openPopup}
                  onClose={handleClosePopup}
                />
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default ItayPostPage;
