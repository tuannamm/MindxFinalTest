import React, { useState } from "react";

const InputShortener = () => {
  const [url, setURL] = useState("");
  const [link, setLink] = useState("");

  const tabs = ["shrto.de", "9qr.de", "hiny.link"];

  const handleClick = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then((url) => {
        setLink(url);
      });
  };

  return (
    <div className="myapp">
      <form method="GET">
        <label for="fname">URL</label>
        <input type="text" onChange={(e) => setURL(e.target.value)} />
      </form>

      {tabs.map((tab, index) => (
        <button key={index} onClick={handleClick}>
          {tab}
        </button>
      ))}

      <div>{link}</div>
    </div>
  );
};

export default InputShortener;
