import React from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchItem from "../components/SearchItem";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useMediaQuery } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useDispatch } from "react-redux";
import { setPage } from "../slices/navbarSlice";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const searchResultData = {
  storyName : "Meri Kahani",
  date : "20 January",
  initiatorName: "Hamnana",
  genre: "Comedy"
}


const Search = () => {
  const dispatch = useDispatch();
  dispatch(setPage("search"));

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery('(min-width: 1700px)');


  return (
    <Grid container >
      <Grid item xs={1}></Grid>
      <Grid item container xs={10}>
        <Grid item xs={12}>
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            sx={{ padding: "0 15vw", margin: "30px 0" }}
            spacing={2}
          >
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                style={{
                  borderRadius: "20px",
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

            <FormControl fullWidth>
            <InputLabel id="demo-multiple-chip-label">Filters</InputLabel>
              <Select
                style={{
                  borderRadius: "20px",
                }}
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label = "Filters"/>}
                renderValue={(selected) => (
                  selected.length ? (
                    <Box sx={{ display: 'flex', gap: 0.5, overflow: 'auto' }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  ) : (
                    <Box>
                      <div>PLACEHOLDER</div>
                    </Box>
                  )
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <Grid container  direction={isDesktop ? 'row' : 'column'} spacing={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={6}>
              <SearchItem storyName = {searchResultData.storyName} date = {searchResultData.date} initiatorName = {searchResultData.initiatorName} genre={searchResultData.genre} />
            </Grid>
            <Grid item xs={6}>
              <SearchItem storyName = {searchResultData.storyName} date = {searchResultData.date} initiatorName = {searchResultData.initiatorName} genre={searchResultData.genre} />
            </Grid>
            <Grid item xs={6}>
              <SearchItem storyName = {searchResultData.storyName} date = {searchResultData.date} initiatorName = {searchResultData.initiatorName} genre={searchResultData.genre} />
            </Grid>
            <Grid item xs={6}>
              <SearchItem storyName = {searchResultData.storyName} date = {searchResultData.date} initiatorName = {searchResultData.initiatorName} genre={searchResultData.genre} />
            </Grid>
            <Grid item xs={6}>
              <SearchItem storyName = {searchResultData.storyName} date = {searchResultData.date} initiatorName = {searchResultData.initiatorName} genre={searchResultData.genre} />
            </Grid>
            <Grid item xs={6}>
              <SearchItem storyName = {searchResultData.storyName} date = {searchResultData.date} initiatorName = {searchResultData.initiatorName} genre={searchResultData.genre} />
            </Grid>
          </Grid>
          
            <Stack justifyContent={"center"} alignItems={"center"} m={6} >
            <Pagination  count={isSmallScreen ? 5 : 10} color="primary" />
              </Stack> 
            
        </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Search;
