import React from "react";
import Picker from "emoji-picker-react";

const EmojiPicker = () => (
  <div className="emoji-picker">
    <Picker lazyLoadEmojis={true} />
  </div>
);

console.log("EmojiPicker loading", Date.now());

export default EmojiPicker;
