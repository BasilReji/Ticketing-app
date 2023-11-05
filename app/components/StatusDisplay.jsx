import React from "react";

const getColor = (status) => {
  let color = "bg-slate-700";
  switch (status) {
    case "ToDo":
      color = "bg-red-200";
      return color;
    case "InProgress":
      color = "bg-yellow-200";
      return color;
    case "Done":
      color = "bg-green-200";
      return color;
    default:
      return color;
  }
};

const formatStatus = (status) => {
  switch (status) {
    case "ToDo":
      return "To Do";
    case "InProgress":
      return "In Progress";
    case "Done":
      return "Done";
    default:
      return "Unknown";
  }
};

function StatusDisplay({ status }) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {formatStatus(status)}
    </span>
  );
}

export default StatusDisplay;
