import React from 'react';
import Listar1 from '../pages/Listar/Listar1';

import renderer from 'react-test-renderer';


test('renderers correctly', ()=>{

    const tree = renderer.create(<Listar1/>).toJSON();
    expect(tree).toMatchSnapshot();
});