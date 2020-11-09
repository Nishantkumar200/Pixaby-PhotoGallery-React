import {
  Select,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyle from "./SearchStyle";
import Gallery from "./Photos/Gallery";

const SearchBar = () => {
  const classes = useStyle();
  const [photos, setPhotos] = useState([]);
  const [term, setTerm] = useState("");
  const [categories, setCategories] = useState(" ");
  const [type, setType] = useState("all");
  const [per_page, setPerPage] = useState(20);

  const API_KEY = "18993843-4f8f00d6b7293cb29953a3198";

  const categoriess = [
    {
      name: "None",
      value: " ",
    },
    {
      name: "Fashion",
      value: "Fashion",
    },
    {
      name: "backgrounds",
      value: "backgrounds",
    },
    {
      name: "nature",
      value: "nature",
    },
    {
      name: "science",
      value: "science",
    },
    {
      name: "education",
      value: "education",
    },
    {
      name: "feelings",
      value: "feelings",
    },
    {
      name: "health",
      value: "health",
    },
    {
      name: "people",
      value: "people",
    },
    {
      name: "religion",
      value: "religion",
    },
    {
      name: "places",
      value: "places",
    },
    {
      name: "animals",
      value: "animals",
    },
    {
      name: "industry",
      value: "industry",
    },
    {
      name: "computer",
      value: "computer",
    },
    {
      name: "education",
      value: "education",
    },
    {
      name: "food",
      value: "food",
    },
    {
      name: "sports",
      value: "sports",
    },
    {
      name: "transportation",
      value: "transportation",
    },
    {
      name: "travel",
      value: "travel",
    },
    {
      name: "buildings",
      value: "buildings",
    },
    {
      name: "business",
      value: "business",
    },
    {
      name: "music",
      value: "music",
    },
  ];

  const image_type = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Photo",
      value: "photo",
    },
    {
      name: "illustration",
      value: "illustration",
    },
    {
      name: "vector",
      value: "vector",
    },
  ];

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=${type}&category=${categories}&per_page=${per_page}&safesearch=true`
      )
      .then((res) => setPhotos(res.data.hits))
      .catch((e) => console.log(e));
  }, [term, categories, type, per_page]);

  return (
    <>
      <form className={classes.text}>
        <TextField
          className={classes.searchfield}
          type="text"
          label="Search Photos"
          variant="outlined"
          size="medium"
          onChange={(event) => setTerm(event.target.value)}
          helperText="As you type in search box , it will start searching.Do not hit enter,It might take some time as your internet speed "
        />
      </form>

      <div className={classes.filterItems}>
        <FormControl className={classes.formwidth} variant="outlined">
          <InputLabel>Categories</InputLabel>
          <Select
            value={categories}
            onChange={(event) => setCategories(event.target.value)}
          >
            {categoriess.map((category) => (
              <MenuItem value={category.value}>{category.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formwidth} variant="outlined">
          <InputLabel>Image-Type</InputLabel>
          <Select
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            {image_type.map((types) => (
              <MenuItem value={types.value}>{types.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          variant="outlined"
          label="Number of Photos"
          size="medium"
          type="text"
          onChange={(event) => setPerPage(event.target.value)}
          helperText="Default - 20"
        />
      </div>

      <Gallery photos={photos} />
    </>
  );
};

export default SearchBar;
