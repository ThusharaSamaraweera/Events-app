import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/service";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList events={featuredEvents} />
    </>
  )
}
