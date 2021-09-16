import React from "react";
import { Link } from "react-router-dom";
import "./TarefaCard.scss";

const TarefaCard = (props) => {
    const tarefa = props.tarefa;
    return (
        <div className="tarefaCard">
            <div className={props.className}>
                <h2 className="card__title">{tarefa.titulo}</h2>
                <p className="card__prioridade">Prioridade: {tarefa.prioridade}</p>
                <p className="card__descricao">{tarefa.descricao}</p>
                <p className="card__detalhes">
                    <Link to={`/details/${tarefa._id}`} className="card__link">
                        Mais Detalhes <i className="fas fa-arrow-right"></i>
                    </Link>
                </p>
                <p className="card__prazo">Prazo: {new Date(tarefa.prazo).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default TarefaCard;
