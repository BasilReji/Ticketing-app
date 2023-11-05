"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
function EditTicketForm({ ticket }) {
  let startingTicket = {
    title: "",
    description: "",
    category: "Hardware",
    progress: 0,
    priority: 1,
    status: "ToDo",
  };

  const editMode = ticket._id === "new" ? false : true;

  if (editMode) {
    startingTicket = {
      ...ticket,
    };
  }

  const router = useRouter();

  const [formData, setFormData] = useState(startingTicket);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    if (editMode) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{editMode ? "Edit" : "Create"} your ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows={5}
        />
        <label>Category</label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          required
          value={formData.category}
        >
          <option value={"Hardware"}>Hardware</option>
          <option value={"Software"}>Software</option>
          <option value={"General"}>General</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            required
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            required
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            required
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            required
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            required
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          id="progress"
          name="progress"
          type="range"
          onChange={handleChange}
          required
          value={formData.progress}
          min={0}
          max={100}
        />
        <label>Status</label>
        <select
          id="status"
          name="status"
          onChange={handleChange}
          required
          value={formData.status}
        >
          <option value={"ToDo"}>To Do</option>
          <option value={"InProgress"}>In Progress</option>
          <option value={"Done"}>Done</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={editMode ? "Edit Ticket" : "Create Ticket"}
        />
      </form>
    </div>
  );
}

export default EditTicketForm;
