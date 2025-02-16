import EventForm from "../components/EventForm";

import { redirect } from "react-router-dom";

export default function NewEventPage() {
  return <EventForm />;
}
export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  //HTTP: 422 Unprocessable Content
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    return new Response(JSON.stringify({ message: "Could not save event." }), {
      status: 500,
    });
  }

  return redirect("/events");
}
