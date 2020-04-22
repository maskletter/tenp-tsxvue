# Tsx for vue

Syntax declaration of tsx containing a lot of vue

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

//调用创建的组件
@Component({})
class About extends TsxVue {
    private render() {
        return <div class='about'>
            <User id={1} />
        </div>;
    }
}

```

