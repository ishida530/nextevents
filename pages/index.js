import EventList from "../components/events/event-list"
import MainHeader from "../components/layout/main-header"
import { getFeaturedEvents } from "../dummy-data"

const HomePage = () => {

    const featureEvents = getFeaturedEvents()

    return (
        <div>
            <EventList items={featureEvents} />
        </div>
    )
}

export default HomePage