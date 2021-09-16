import React from "react";
import Modal from "react-responsive-modal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Api } from "../../api/api";
import "react-responsive-modal/styles.css";
import "./TarefaDetails.scss";
import { format } from "date-fns";

const TarefaDetails = (props) => {
    const [tarefa, setTarefa] = useState({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getTarefaById();
    }, []);

    const id = props.match.params.id;

    const getTarefaById = async () => {
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        setTarefa(data);
    };

    const handleDelete = async () => {
        const response = await Api.fetchDelete(id);
        props.history.push("/");
    };
    const formataData = (data) => {
        return (
            data.substring(8, 10) +
            "/" +
            data.substring(5, 7) +
            "/" +
            data.substring(0, 4)
        );
    };
    return (
        <div className="tarefaCard_details">
            <div
                className={
                    "card_details " +
                    (() => {
                        switch (tarefa.status) {
                            case "fazer":
                                return "card-2";
                            case "fazendo":
                                return "card-5";
                            case "feito":
                                return "card-4";
                        }
                    })()
                }
            >
                <h2 className="card__title">{tarefa.titulo}</h2>
                <div className="card__icon_details">
                    <Link to={"/edit/" + tarefa._id}>
                        <i className="far fa-edit edit"></i>
                    </Link>
                    <a onClick={() => setOpen(true)}>
                        <i className="far fa-trash-alt delete"></i>
                    </a>
                </div>
                <p className="card__prioridade_details">
                    Prioridade: {tarefa.prioridade}
                </p>
                <p className="card__descricao_details">{tarefa.descricao}</p>
                <p className="card__status">Status: {tarefa.status}</p>
                <p className="card__data dataCriacao">
                    Criado em:{" "}
                    {new Date(tarefa.dataCriacao).toLocaleDateString()}
                </p>
                <p className="card__data dataPrazo">
                    Prazo: {new Date(tarefa.prazo).toLocaleDateString()}
                </p>
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                classNames={{
                    overlay: "customOverlay",
                    modal: "customModal",
                }}
                center
            >
                {" "}
                <div className="modal">
                    <p className="modalText">
                        Deseja realmente excluir esta tarefa?
                    </p>
                    <div className="buttonsGroup">
                        <button
                            className="ghost-round modal-button yes"
                            onClick={handleDelete}
                        >
                            Sim
                        </button>
                        <button
                            onClick={() => setOpen(false)}
                            className="ghost-round modal-button no"
                        >
                            Não
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default TarefaDetails;
