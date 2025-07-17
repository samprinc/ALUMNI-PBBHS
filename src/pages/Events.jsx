import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("https://alumni-backend-sjku.onrender.com/api/alumni/events/");
        const today = new Date();

        // Categorize events as upcoming or past based on the date
        const enrichedEvents = res.data.map((event) => ({
          ...event,
          upcoming: new Date(event.date) >= today,
        }));

        setEvents(enrichedEvents);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const upcoming = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);

  return (
    <div className="events-container">
      <h1>Alumni Events</h1>

      {loading && <p>Loading events...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <section>
            <h2>Upcoming Events</h2>
            <div className="event-grid">
              {upcoming.length === 0 ? (
                <p>No upcoming events.</p>
              ) : (
                upcoming.map((event) => <EventCard key={event.id} {...event} />)
              )}
            </div>
          </section>

          <section>
            <h2>Past Events</h2>
            <div className="event-grid">
              {past.length === 0 ? (
                <p>No past events.</p>
              ) : (
                past.map((event) => <EventCard key={event.id} {...event} />)
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function EventCard({ title, date, location, description, image }) {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-details">
        <h3>{title}</h3>
        <p className="date">
          {new Date(date).toDateString()} • {location}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Events;
