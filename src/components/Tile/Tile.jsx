
import './Tile.css';



export default function Tile(props) {
  const { number, image } = props;

  if (number % 2 === 0) {
    return (
      <div className="tile black-tile">
        <img src={image}></img>
      </div>
    )
  } else {
    return (
      <div className="tile white-tile ">
        <img src={image}></img>
      </div>
    )
  }

}
