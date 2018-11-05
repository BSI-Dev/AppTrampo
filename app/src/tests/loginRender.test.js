import React from 'react';
import Login from '../pages/Login/Login';

import renderer from 'react-test-renderer';


test('renderers correctly', ()=>{

    const tree = renderer.create(<Login/>).toJSON();

    expect(tree).toMatchSnapshot();
});