import { RdButtonComponent } from "./rd-button.component";
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
    title: 'rd-button',
    component: RdButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta

const Template: Story<RdButtonComponent> = (args: RdButtonComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    text: 'Filtrar',
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Incluir'
}