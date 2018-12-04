import api from '../services/api';


async function ListarDemandas(distancia, categoria) {
    try {
        const parametro = 'Categoria='+categoria+"&Distancia="+distancia;
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

async function ListarProfissionais(categoria, distancia, avaliacao) {
    try {
        const response = await api.get('/profissionais/${distancia}/${avaliacao}/${categoria}', {
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

async function filtroListar(tipo, categoria, distancia, avaliacao){
    switch (tipo) {
        case 0:
        ListarProfissionais(categoria, distancia, avaliacao);    
            break;
    
        case 1:
        ListarDemandas(distancia,categoria);
            break;
    }
    

}


const ListarController = {
    filtroListar, ListarDemandas
};
  
export default ListarController;