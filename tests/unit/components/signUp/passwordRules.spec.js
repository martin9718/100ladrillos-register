import {shallowMount} from '@vue/test-utils';
import PasswordRules from "@/components/signUp/PasswordRules";

describe('PasswordRules Componente', () => {
    const wrapper = shallowMount(PasswordRules);
    const checkPassword = wrapper.vm.checkPassword;
    let checked;

    test('Checked should be equal to 2', async () => {
        await wrapper.setProps({password: '100Ladrillosss456'});
        checkPassword(wrapper.props().password);
        checked = wrapper.findAll('.check');

        expect(checked.length).toBe(2)
    });

    test('Checked should be equal to 3', async () => {
        await wrapper.setProps({password: '100Ladrillosss'});
        checkPassword(wrapper.props().password);
        checked = wrapper.findAll('.check');

        expect(checked.length).toBe(3)
    });

    test('Checked should be equal to 4', async () => {
        await wrapper.setProps({password: '100Ladrillos'});
        checkPassword(wrapper.props().password);
        checked = wrapper.findAll('.check');

        expect(checked.length).toBe(4)
    });

    test('Checked should be equal to 5', async () => {
        await wrapper.setProps({password: '100Ladrillos+'});
        checkPassword(wrapper.props().password);
        checked = wrapper.findAll('.check');

        expect(checked.length).toBe(5)
    });

    test('Checked should be equal to 6', async () => {
        await wrapper.setProps({password: '101Ladrillos+'});
        checkPassword(wrapper.props().password);
        checked = wrapper.findAll('.check');

        expect(checked.length).toBe(6)
    });

});