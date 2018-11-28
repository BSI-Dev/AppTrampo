import api from './api';


async function ListarCidades(id) {
    try {
        const response = await api.get('/cidades/estado/'+id, {
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

async function ListarEstados() {
    try {
        const response = await api.get('/estados', {
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

async function ListarCategorias() {
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



async function Salvar(o) {
    try {
        console.log(o)
        const response = await api.post('/pessoa/novo',
            {
                Nome:'Pedro',
                Email:'pedro@Hotmail.com',
                DataNascimento:'2018-01-01',
                CPF:'1234569',
                Senha:'123'
            },
           {
            headers: {
                'Access-Control-Expose-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Origin':"*",
            }
            });
            console.log(response.data)
      //return responseJson;
    } catch (error) {
      console.error(error);
    }
}

const PessoaController = {
    Salvar, ListarCategorias, ListarEstados, ListarCidades 
};
  
export default PessoaController;