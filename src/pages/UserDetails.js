import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import SearchItem from "../components/SearchItem";
import { useDispatch } from "react-redux";
import { setPage } from "../slices/navbarSlice";

const UserDetails = () => {
    const isDesktop = useMediaQuery('(min-width: 1500px)');

    const searchResultData = {
        storyName: "Meri Kahani",
        date: "20 January",
        initiatorName: "Hamnana",
        genre: "Comedy"
    }

    const dispatch = useDispatch();
    dispatch(setPage("user details"));

    return (

        <div className="tt-magic-cursor">



            <div className="breadcrumb-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Author Details</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <section className="author-section pt-50 pb-100">
                <div className="container">
                    <div className="row gy-2">
                        <div className="col-lg-12">
                            <div className="author-details">
                                <img className="image" src="assets/images/authors/author-details-img.jpg" alt="image" />
                                <div className="author-info">
                                    <h2>Hamna Chinkiari</h2>
                                    <ul className="category">
                                        <li><a href="blog-classic.html">Creative,</a></li>
                                        <li><a href="blog-classic.html">Lifestyle,</a></li>
                                        <li><a href="blog-classic.html">Fashion</a></li>
                                    </ul>
                                    <p>Morbi quis elementum ex, id commodo odio. In maximus, augue euquami vestibulum gomat dictum, lorem nibh faucibus quam.</p>
                                    <ul className="meta-list">
                                        <li><img src="assets/images/icons/total-post.svg" alt="image" />Total Post: <span>209</span></li>
                                        <li><img src="assets/images/icons/view.svg" alt="image" />Total View: <span>25199</span></li>
                                        <li><img src="assets/images/icons/like.svg" alt="image" />Like: <span>11957</span></li>
                                    </ul>
                                    <Stack direction="row" flexWrap={true} justifyContent="space-evenly" sx={{ mt: 7 }}>
                                        <Button variant="outlined" sx={{ borderRadius: "50px", textTransform: "none" }}><i class="fab fa-facebook" style={{ fontSize: "16px", marginRight: "4px" }}></i>Facebook</Button>
                                        <Button variant="outlined" sx={{ borderRadius: "50px", textTransform: "none" }}><i class="bx bxl-twitter" style={{ fontSize: "16px", marginRight: "4px" }}></i>Twitter</Button>
                                        <Button variant="outlined" sx={{ borderRadius: "50px", textTransform: "none" }}><i class="bx bxl-instagram-alt" style={{ fontSize: "18px", marginRight: "4px" }}></i>Instagram</Button>
                                    </Stack>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-12">
                            <Grid container direction={isDesktop ? 'row' : 'column'} spacing={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <Grid item xs={6}>
                                    <Typography variant="h1" align="center" sx={{my:"25px"}}>
                                        Initiated Plots
                                    </Typography>
                                    <Stack direction="column" spacing={2}>
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />

                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h1" align="center" sx={{my:"25px"}}>
                                        Composed Chapters
                                    </Typography>
                                    <Stack direction="column" spacing={2}>
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />
                                        <SearchItem storyName={searchResultData.storyName} date={searchResultData.date} initiatorName={searchResultData.initiatorName} genre={searchResultData.genre} />

                                    </Stack>
                                </Grid>

                            </Grid>

                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default UserDetails;