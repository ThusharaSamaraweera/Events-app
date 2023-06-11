import EventSummary from '@/components/event-details/event-summary'
import { getEventById } from '@/service'
import { useRouter } from 'next/router'

const EventDetailsPage = () => {
    const router = useRouter()
    const eventId = router.query?.eventId
    const event = getEventById(eventId)

    return (
        <>
            <EventSummary title={event?.title} />
        </>
    )   
}

export default EventDetailsPage