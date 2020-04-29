
declare module 'vue-hooks'{
    import { CreateElement } from 'vue';
    export const useState: <T>(value: T) => [T, (value: T) => void];
    export const useEffect: () => () => void;
    export const useWatch: (value: () => void, callback: (val: any, prevVal: any) => void) => void;
    export const useComputed: () => void;
    export const useMounted: () => void;
    export const useUpdated: () => void;
    export const useDestroyed: () => void;
    export const withHooks: (data: (h: CreateElement) => void) => any;
}