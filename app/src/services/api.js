import axios from "axios";

const api = axios.create({
    baseURL: 'https://trabalho-trampo-pedrohcosta.c9users.io/.' //incluir url da api que vai prover os dados da lista
});

export default api;