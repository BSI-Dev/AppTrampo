import React from 'react';
import ListarComponente from '../pages/Listar/ListaComponente';

import renderer from 'react-test-renderer';


test('renderers correctly', ()=>{

    const tree = renderer.create(<ListarComponente/>).toJSON();
    expect(tree).toMatchSnapshot();
});