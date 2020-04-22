import Vue from 'vue'
import { ComponentOptions } from 'vue/types/umd';
import VueTsx from './jsx/global'
import './fild'

// VueTsx.

export class Component<Props = {}> extends Vue {
    constructor(props: ComponentOptions<any> & ThisType<any> & Props);
}

export default VueTsx