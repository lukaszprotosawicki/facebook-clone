import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/236x/7e/69/80/7e6980d30c542752e7b49965ca6d2bd1.jpg"
        profileSrc="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        title="lucaretti"
      />
      <Story
        image="https://samequizy.pl/wp-content/uploads/2019/01/filing_images_5043e7f1f77a.jpg"
        profileSrc="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        title="cezaretti"
      />
      <Story
        image="https://kolorowanki.info.pl/wp-content/uploads/2021/04/obrazek-z-bajki-lilo-i-stich-do-kolorowania.jpg"
        profileSrc="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        title="duptoretti"
      />
      <Story
        image="https://avatarfiles.alphacoders.com/162/162138.jpg"
        profileSrc="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        title="tiroretti"
      />
      <Story
        image="https://avatarfiles.alphacoders.com/162/162138.jpg"
        profileSrc="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        title="tiroretti"
      />
    </div>
  );
}

export default StoryReel;
