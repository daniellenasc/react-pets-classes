import axios from "axios";
import { Link } from "react-router-dom";

export function Card(props) {
  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/catchapet/${props.id}`
      );
      props.setRerender(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{`Genero: ${props.gender}`}</p>
        <p className="card-text">Idade: {props.age}</p>
        <p className="card-text">{`Brinquero Favorito: ${props.favoriteToy}`}</p>
        <Link to={`/editar-pet/${props.id}`}>
          <button type="button">Editar Pet</button>
        </Link>

        <button type="button" onClick={handleDelete}>
          Remover Pet
        </button>
      </div>
    </div>
  );
}

// A tag style no react SEMPRE VAI RECEBER UM JAVASCRIPT!
// PORQUE? PORQUE ELA SEMPRE VAI RECEBER UM OBJETO
// A chave do objeto vai ser a regra do css que a gente quer alterar
// O value vai ser uma string
