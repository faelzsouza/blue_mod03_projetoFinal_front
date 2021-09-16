export const Api = {
    url: "https://back-todo-list.herokuapp.com/tarefas",
    fetchGet: () => fetch(Api.url),
    fetchGetById: (id) => fetch(Api.url + "/findById/" + id),
    fetchPost: (body) =>
        fetch(Api.url + "/add", {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),
    fetchPut: (body, id) =>
        fetch(Api.url + "/update/" + id, {
            method: "PUT",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),
    fetchDelete: (id) =>
        fetch(Api.url + "/delete/" + id, {
            method: "DELETE",
        }),
};
