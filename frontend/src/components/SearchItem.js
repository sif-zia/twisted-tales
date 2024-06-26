import React from "react";
import { Paper, useMediaQuery } from '@mui/material';
import { format } from 'date-fns';


const SearchItem = ({storyName, date, genre, coverImgURL, isStory, storyId, chapterId}) => {
 
  const getFormattedDate = (createdAt, formatString) => {
    if (!createdAt) {
      return " "
    }
    const formatted = format(new Date(createdAt), formatString);
    return formatted
  }


  return (

    <Paper elevation={3}>
    <div
      className="blog-list-2"
      style={{paddingLeft:"10px", boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)", borderRadius: "10px", maxWidth:"900px"}}
    >
      <div className="date">
        <h3>{getFormattedDate(date, 'dd')}</h3>
        <p>{getFormattedDate(date, 'MMMM')}</p>

      </div>
      <div className="content">
        <ul>
          
          <li>
            <a href="#">{genre}</a>
          </li>
        </ul>
        <h4>
          <a href={`/story/${storyId}`}>
            {storyName}
          </a>
        </h4>
        <div className="bottom-area">
          {!isStory ?
          <a href={`/story/${storyId}/chapter/${chapterId}`}className="eg-btn arrow-btn">
            Read Chapter<i className="bi bi-arrow-right"></i>
          </a>
          :
          // onclick for story set karna hayyyyyyyyyyyyy
          <a href={`/story/${storyId}`} className="eg-btn arrow-btn">
            Read Story<i className="bi bi-arrow-right"></i>
          </a>
        }
          
        </div>
      </div>
      <div className="image" style={{margin:"0", padding:"0"}}>
        <img src={`http://localhost:4000/getImage?imagePath=${coverImgURL}`} alt="search result" style={{height:"24vh"}}/>
      </div>
    </div>
    </Paper>
  );
};

export default SearchItem;
