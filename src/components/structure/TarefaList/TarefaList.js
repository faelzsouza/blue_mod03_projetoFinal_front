import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Api } from "../../../api/api";
import TarefaCard from "../TarefaCard/TarefaCard";
import './TarefaList.scss'

const TarefaList = () => {
    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        getTarefas()
    }, [])

    const getTarefas = async () => {
        const response = await Api.fetchGet();
        const data = await response.json();
        setTarefas(data)
    }

    let tarefasFazer = [];
    let tarefasFazendo = [];
    let tarefasFeito = [];

    tarefas.map((tarefa, idx) => {
        switch (tarefa.status) {
            case "fazer":
                tarefasFazer.push(tarefa);
                break;
            case "fazendo":
                tarefasFazendo.push(tarefa);
                break;
            case "feito":
                tarefasFeito.push(tarefa);
                break;
        }
    });

    return (
        <div className="tarefaList">
            {(() => {
                if (tarefasFazer.length > 0) {
                    return (
                        <div className='statusArea'>
                            <strong>Fazer</strong>
                        <section className="tarefasStatus">
                            {tarefasFazer.map((tarefa, idx) => (
                                <TarefaCard tarefa={tarefa} className='card card-2' />
                            ))}
                        </section>
                        </div>
                    );
                }
            })()}
            {(() => {
                if (tarefasFazendo.length > 0) {
                    return (
                        <div className='statusArea'>
                        <strong>Fazendo</strong>
                        <section className="tarefasStatus">
                            {tarefasFazendo.map((tarefa, idx) => (
                                <TarefaCard tarefa={tarefa} className='card card-5' />
                            ))}
                        </section>
                        </div>
                    );
                }
            })()}
            {(() => {
                if (tarefasFeito.length > 0) {
                    return (
                        <div className='statusArea'>
                            <strong>Feito</strong>
                        <section className="tarefasStatus">
                            {tarefasFeito.map((tarefa, idx) => (
                                <TarefaCard tarefa={tarefa} className='card card-4' />
                            ))}
                        </section>
                        </div>
                    );
                }
            })()}
        </div>
    );
};

export default TarefaList;
