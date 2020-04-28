import Vue from 'vue'
import { ComponentOptions } from 'vue/types/umd';
import TsxVue from './jsx/global'
import './fild'
import './vue-hooks'

// TsxVue.

export class Component<Props = {}> extends Vue {
    constructor(props: ComponentOptions<any> & ThisType<any> & Props);
}

export default TsxVue