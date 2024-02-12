import React from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  Grid,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchItem from "../components/SearchItem";

const Search = () => {
  return (
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item container xs={10}>
        <Grid item xs={12}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ padding: "0 15vw", margin: "20px 0" }}
          >
            <OutlinedInput
              style={{
                borderRadius: "50px",
              }}
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
              placeholder="Search"
            />
          </FormControl>
          <Grid container spacing={2}>
			<Grid item xs={6}><SearchItem /></Grid>
			<Grid item xs={6}><SearchItem /></Grid>
			<Grid item xs={6}><SearchItem /></Grid>
			<Grid item xs={6}><SearchItem /></Grid>
			<Grid item xs={6}><SearchItem /></Grid>
			<Grid item xs={6}><SearchItem /></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Search;
