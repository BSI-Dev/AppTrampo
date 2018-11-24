import api from '../services/api';


async function ListarCategoria() {
    try {
        const response = await api.get('/categorias', {
            headers: {
                'Access-Control-Expose-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Origin':"*",
            }
            });
      
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

async function ListarServico() {
    try {
        const response = await api.get('/servicos', {
            headers: {
                'Access-Control-Expose-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Origin':"*",
            }
        });
      
      return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function Salvar() {
    try {
      
        const response = await api.post('/servicos', {
            headers: {
                'Access-Control-Expose-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Origin':"*",
            }
            });

      //return responseJson;
    } catch (error) {
      console.error(error);
    }
}

const BuscaController = {
    Salvar, ListarCategoria
};
  
export default BuscaController;