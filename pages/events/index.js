import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/service";

const AllEventPage = () => {
  const events = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
};

export default AllEventPage;
