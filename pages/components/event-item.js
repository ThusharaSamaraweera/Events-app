import classes from './event-item.module.css';

const EventItem = (props) => {
    const { title, image, date, location, id } = props.event;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

  const formattedAddress = location.replace(', ', '\n');


    return (
        <li className={classes.item}>
            <img src={"/" + image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address>{location}</address>
                    </div>
                </div>
                <div>
                    <button>Explore Event</button>
                </div>
            </div>
        </li>
    );

}

export default EventItem;