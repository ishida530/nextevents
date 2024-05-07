import { useRouter } from 'next/router'
import React from 'react'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'

const EventDetailPage = () => {
  const eventId = useRouter().query.eventId
  const event = getEventById(eventId)
  console.log(event)
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert >)
  }

  const { date, location, image, title, description } = event
  return (
    <>
      <EventSummary title={title} />
      <EventLogistics address={location} date={date} image={image} imageAlt={title} />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  )
}

export default EventDetailPage