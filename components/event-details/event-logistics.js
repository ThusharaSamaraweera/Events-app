import Image from 'next/image';
import classes from './event-logistics.module.css';

function EventLogistics(props) {
  const { date, address, image, title } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={title} width={400} height={400} />
      </div>
      <ul className={classes.list}>

      </ul>
    </section>
  );
}

export default EventLogistics;
