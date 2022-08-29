import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)
      setChannelDetail(data?.items[0])

      const videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      setVideos(videoData?.items)
    }
    fetchResults()
  }, [id]);

  return (
    <Box minHeight="95vh" color="white">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(248,147,29,1) 23%, rgba(0,0,254,1) 100%)",
            zIndex: 10,
            height: "250px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
        <Box
          sx={{
            mr: { sm: "100px" },
          }}
        />
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
