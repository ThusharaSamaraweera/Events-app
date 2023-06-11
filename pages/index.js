import { getFeaturedEvents } from "@/service";
import EventList from "./components/event-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList events={featuredEvents} />
    </>
  )
}
