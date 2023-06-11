import EventContent from "@/components/event-details/event-content";
import EventLogistics from "@/components/event-details/event-logistics";
import EventSummary from "@/components/event-details/event-summary";
import { getEventById } from "@/service";
import { useRouter } from "next/router";

const EventDetailsPage = () => {
  const router = useRouter();
  const eventId = router.query?.eventId;
  const event = getEventById(eventId);

  return (
    <>
      <EventSummary title={event?.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        title={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailsPage;
