import { Box, Grid, Button } from "@mui/material";
import "../../style/postPage.css";

const ItayPostPage = () => {
  return (
    <Box pt={8}>
      <Box sx={{ maxWidth: 1200 }} className="postpage-container-copy">
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", minHeight: 600, alignItems: "center" }}
          >
            <Box className="postpage-image-list">
              <Box
                className="post-image-item"
                sx={{
                  background: `linear-gradient(0deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.28) 100%), url(../../../public/assets/img/post/img_frame_9.png), white 50% / cover no-repeat`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              ></Box>
              <Box
                className="post-image-item"
                sx={{
                  background: `linear-gradient(0deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.28) 100%), url(../../../public/assets/img/post/img_frame_9.png), white 50% / cover no-repeat`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              ></Box>
              <Box
                className="post-image-item"
                sx={{
                  background: `url(../../../public/assets/img/post/img_frame_9.png), white 50%`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                background: `url(../../../public/assets/img/post/img_frame_9.png), white 50%`,
                backgroundRepeat: "no-repeat",
                m: "0 auto",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              className="postpage-main-image"
            ></Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ height: 600 }}>
            <Box className="postpage-details-top">
              <Box className="postpage-details-title">
                <p className="postpage-details-title-text">Title</p>
              </Box>

              <Box className="postpage-details-price-container">
                <p className="postpage-details-price-text">₪170</p>
              </Box>
            </Box>
            <Box className="postpage-details-cate">
              <p className="postpage-details-cate-title">Category:</p>
              <p className="postpage-details-cate-des">Lorem ipsum dolor</p>
            </Box>
            <Box className="postpage-details-bottom">
              <p className="postpage-details-bottom-title">Description</p>
              <p className="postpage-details-bottom-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                animi ipsum amet deleniti ex doloribus corporis eligendi?
                Incidunt dignissimos corrupti eius vitae dolorem quo quasi
                dolorum, asperiores quos, facilis voluptatem!
              </p>
            </Box>
            <Box sx={{ pr: 4, pt: 4 }}>
              <button className="postpage-btn">
                <p className="postpage-btn-text">Contact Seller</p>
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ItayPostPage;
