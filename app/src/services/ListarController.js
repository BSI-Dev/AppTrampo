import api from '../services/api';


async function ListarDemandas() {
    try {
        const response = await api.get('/demandas', {
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


const ListarController = {
    ListarDemandas
};
  
export default ListarController;