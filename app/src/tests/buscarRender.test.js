import React from 'react';
import Buscar from '../pages/Buscar/Buscar';

import renderer from 'react-test-renderer';


test('renderers correctly', ()=>{

    const tree = renderer.create(<Buscar/>).toJSON();
    
    expect(tree).toMatchSnapshot();
});