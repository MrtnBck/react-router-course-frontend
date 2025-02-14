import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <div>
      <h1>Event Detail Page</h1>

      <h3>Event id: {params.eventId}</h3>
    </div>
  );
}
