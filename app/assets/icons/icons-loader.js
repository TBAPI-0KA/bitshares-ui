let icons = [
    "photo-camera",
    "adjust",
    "assets",
    "checkmark-circle",
    "chevron-down",
    "clippy",
    "clock",
    "cog",
    "cogs",
    "connected",
    "connect",
    "cross-circle",
    "dashboard",
    "deposit",
    "disconnected",
    "dollar-green",
    "dollar",
    "download",
    "excel",
    "eye",
    "eye-striked",
    "fi-star",
    "folder",
    "hamburger-x",
    "hamburger",
    "hourglass",
    "key",
    "list",
    "locked",
    "minus-circle",
    "news",
    "plus-circle",
    "power",
    "question-circle",
    "server",
    "settle",
    "share",
    "shuffle",
    "text",
    "thumb-tack",
    "thumb-untack",
    "thumbs-up",
    "times",
    "trade",
    "transfer",
    "unlocked",
    "user",
    "warning",
    "withdraw",
    "filter",
    "info-circle-o",
    "zoom",
    "people",
    "fire",
    "question-in-circle",
    "attention",
    "checkmark"
];

let iconsMap = {};
for (let i of icons) iconsMap[i] = require(`./${i}.svg`);

export default iconsMap;
