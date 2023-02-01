import { RdTableComponent } from "./rd-table.component";
import { Story, Meta } from '@storybook/angular/types-6-0';


export default {
    title: 'rd-table',
    component: RdTableComponent,
} as Meta

const Template: Story<RdTableComponent> = (args: RdTableComponent) => ({
    props: args,
});

export const Primary = Template.bind({});

Primary.args = {
    title: ['Notas de seção', 'NCM', 'Exceção', 'Descrição TIPI', 'IPI', 'Vigência Inicial']
}