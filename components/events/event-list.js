import EventItem from './event-item'
import classes from './event-list.module.css'
const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map(({ date, image, id, location, title }) => {
        return (
          <EventItem
            date={date}
            image={image}
            id={id}
            location={location}
            title={title}
            key={id}
          />
        )
      })}
    </ul>
  )
}

export default EventList