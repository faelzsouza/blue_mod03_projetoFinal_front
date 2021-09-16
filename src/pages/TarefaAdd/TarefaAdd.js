import React from "react";
import { useState } from "react/cjs/react.development";
import { Api } from "../../api/api";
import "./TarefaAdd.scss";

const TarefaAdd = (props) => {
    const [fields, setFields] = useState({
        status: "fazer",
        prioridade: "alta",
    });

    const handleFieldsChange = (event) => {
        const auxFields = { ...fields };
        auxFields[event.target.name] = event.target.value;
        setFields(auxFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const tarefa = { ...fields };
        const result = await Api.fetchPost(tarefa);
        props.history.push("/");
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="bold-line"></div>
            <div className="container">
                <div className="window">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="welcome">Nova Tarefa</h2>
                        <div className="input-fields">
                            <label htmlFor="titulo">Título</label>
                            <input
                                type="text"
                                name="titulo"
                                id="titulo"
                                className="input-line full-width"
                                value={fields.titulo}
                                onChange={handleFieldsChange}
                                required
                            />
                            <label htmlFor="descricao">Descrição</label>
                            <textarea
                                id="descricao"
                                name="descricao"
                                className="input-line full-width"
                                value={fields.descricao}
                                onChange={handleFieldsChange}
                                required
                            ></textarea>
                            <label htmlFor="status">Status</label>
                            <select
                                name="status"
                                id="status"
                                className="form-select full-width"
                                value={fields.status}
                                onChange={handleFieldsChange}
                            >
                                <option value="fazer">Fazer</option>
                                <option value="fazendo">Fazendo</option>
                                <option value="feito">Feito</option>
                            </select>
                            <label htmlFor="prioridade">Prioridade</label>
                            <select
                                name="prioridade"
                                id="prioridade"
                                value={fields.prioridade}
                                onChange={handleFieldsChange}
                                className="form-select full-width"
                            >
                                <option value="alta">Alta</option>
                                <option value="média">Média</option>
                                <option value="baixa">Baixa</option>
                            </select>
                            <label htmlFor="prazo">Prazo</label>
                            <input
                                type="date"
                                name="prazo"
                                id="prazo"
                                value={fields.prazo}
                                onChange={handleFieldsChange}
                                className="input-line full-width"
                                required
                            />
                            <input
                                type="submit"
                                value="Submit"
                                className="ghost-round full-width"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default TarefaAdd;
