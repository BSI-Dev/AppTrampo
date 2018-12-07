import api from '../services/api';


async function ListarDemandas(distancia, categorias) {
    
    try {
        const parametro = 'Categoria='+categorias+"&Distancia="+distancia;
        const response = await api.get('/demandas?'+parametro, {
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

async function ListarProfissionais(categorias, distancia, avaliacao) {
    try {
        const parametro = 'Distancia='+distancia+'&Avaliacao='+avaliacao+'&Categoria='+categorias;
        const response = await api.get('/profissionais/'+parametro, {
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

async function filtroListar(tipo, categorias, distancia, avaliacao){
    switch (tipo) {
        case 0:
            await ListarProfissionais(categorias, distancia, avaliacao);    
            break;
    
        case 1:
            await ListarDemandas(distancia, categorias);
            break;
    }
    

}


const ListarController = {
    filtroListar, ListarDemandas
};
  
export default ListarController;