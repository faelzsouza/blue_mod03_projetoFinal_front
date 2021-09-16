import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Api } from "../../api/api";
import TarefaAdd from "../TarefaAdd/TarefaAdd";

const TarefaEdit = (props) => {
    const [fields, setFields] = useState({});

    useEffect(() => {
        getTarefaById();
    }, []);

    const id = props.match.params.id;

    const getTarefaById = async () => {
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        console.log(data);
        setFields(data);
    };
    const handleFieldsChange = (event) => {
        const auxFields = { ...fields };
        auxFields[event.target.name] = event.target.value;
        setFields(auxFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const tarefa = { ...fields };
        const result = await Api.fetchPut(tarefa, tarefa._id);
        props.history.push("/");
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="bold-line"></div>
            <div className="container">
                <div className="window">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="welcome">Editando Tarefa</h2>
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
                                value={(() => {
                                    if (fields.prazo) {
                                        return fields.prazo.substring(0, 10);
                                    } else {
                                        return fields.prazo;
                                    }
                                })()}
                                onChange={handleFieldsChange}
                                className="input-line full-width"
                                required
                            />
                            <input
                                type="submit"
                                value="Salvar"
                                className="ghost-round full-width"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default TarefaEdit;
