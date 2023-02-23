import React, { lazy, Suspense } from "react";
import Send from "./icons/Send";
import Emoji from "./icons/Emoji";
import loadable from "@loadable/component";
// import EmojiPicker from "./EmojiPicker";

// const Send = lazy(
//   () => import(/*webpackChunkName: "send-icon" */ "./icons/Send")
// );
// const Emoji = lazy(
//   () => import(/*webpackChunkName: "emoji-icon" */ "./icons/Emoji")
// );

// Lazy load EmojiPicker  when <EmojiPicker /> renders
const Picker = lazy(
  () => import(/*webpackChunkName: "emoji-picker" */ "./EmojiPicker")
);

// LazyLoad using loadable component

const PickLoadable = loadable(() => import("./EmojiPicker"), {
  fallback: <p id="loading">Load...</p>,
});
const ChatInput = () => {
  const [pickerOpen, togglePicker] = React.useReducer((state) => !state, false);

  return (
    <div className="chat-input-container">
      <input type="text" placeholder="Type a message..." />
      <Emoji onClick={togglePicker} />
      <Suspense fallback={<p>Loading...</p>}>
        {pickerOpen && <Picker />}
      </Suspense>
      <Send />
    </div>
  );
};

console.log("ChatInput loading", Date.now());

export default ChatInput;
