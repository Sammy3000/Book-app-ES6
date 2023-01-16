import { DateTime } from "./luxon.js";

const displayTime = () => {
  const timing = DateTime.local();

  const newDate = timing.toLocaleString({
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const newTime = timing
    .toLocaleString(DateTime.TIME_WITH_SECONDS)
    .toLowerCase();

  document.querySelector(".time").textContent = `${newDate}, ${newTime}`;
};

export default displayTime();
