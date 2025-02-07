import { Link } from "react-router-dom";

const events = [
  { id: "ev0", title: "Learn React Router", description: "My react skills will go to the moon" },
  { id: "ev1", title: "Work", description: "Beat friday at my workplace" },
  { id: "ev2", title: "Cleanup", description: "Cleanup my room" },
  { id: "ev3", title: "Immerse in Friday night", description: "Dance in Forelle" },
];

export default function EventsPage() {
  return (
    <div>
      <h1>Events Page</h1>

      <ul>
        {events.map((event) => {
          return <Link to={`/events/${event.id}`}>{event.title}</Link>;
        })}
      </ul>
    </div>
  );
}
