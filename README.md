# Tsx for vue

> 需要在tsconfig.json中配置的compilerOptions中配置strictFunctionTypes为false

```json
{
    "compilerOptions": {
        "strictFunctionTypes": false
    }
}
```


> 包含了大量从react中移植过来的对jsx的html类型声明，及css样式声明

> 默认导出一个继承自vue的类，可以通过此类来添加tsx下标签的属性效验

```typescript
import TsxVue from '@tenp/tsxvue';
import { Component } from 'vue-property-decorator';

@Component
class User extends TsxVue<{ id: number, name?: string }> {
    @Prop() private readonly id!: number;
    @Prop() private readonly name!: string;
    private render() {
      return <div>hello,{this.name}</div>;
    }
}

//Use
@Component({})
class About extends TsxVue {
    private render() {
        return <div class='about'>
            <User id={1} />
        </div>;
    }
}

```
> 包含了对vue-hooks的ts声明文件及对element-ui的tsx声明文件

element-ui的声明，需要在src目录下，创建一个xx.d.ts文件，在文件中引入如下代码，即可以实现element-ui的tsx支持
```typescript

/// <reference path="../../node_modules/@tenp/tsxvue/element-ui/index.d.ts" />

```
