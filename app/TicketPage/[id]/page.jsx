import React from "react";
import EditTicketForm from "../../components/EditTicketForm";
import { getBaseURL } from "../../utils/utils";
let baseUrl = getBaseURL();

const getTicketById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch ticket");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function TicketPage({ params }) {
  const editMode = params.id == "new" ? false : true;
  let updateTicketData = {};
  if (editMode) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <EditTicketForm ticket={updateTicketData} />;
}

export default TicketPage;
