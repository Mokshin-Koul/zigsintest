import classes from './cards.module.css';

function Card(props) {
  return (
    <div className={props.class}>
      <p className={classes.heading}>
        Ready for autumn <br /> collection
      </p>
      <p>Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
      <div>
        <button>Purchase Now</button>
      </div>
      <img alt="hello" src={props.image} className={classes.img}></img>
    </div>
  );
}

export default Card;
