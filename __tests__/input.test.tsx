import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { IInput, Input } from '../src/input'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

type Props = Pick<IInput, keyof IInput>

describe('all', () => {
    test('input', () => {
        let props: Props = {
            label:'ddddd',
            showLabel:true
        }
        const input = shallow(<Input { ...props } />);
        expect(input.find('.inputBox__label').find('label').text()).toEqual(props.label)

        input.setProps({showLabel:false} as Props)
        expect(input.find('.inputBox__label').exists()).toEqual(false)

        input.setProps({value:'cccc'} as Props)
        expect(input.find('.inputBox__input').prop('value')).toEqual('cccc')
    });
})
