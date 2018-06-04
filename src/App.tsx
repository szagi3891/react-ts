import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'react-emotion'
import { List, Record } from 'immutable';

const Link = styled('a')`
  color: red;
`;

interface PropsType {
    name: string
};

class FF {
    name: string;
    aa: number;
    constructor() {
        this.name = "dadsada";
        this.aa = 2121;
    }
}

const fff = (arg: number): number => {
    return arg + 1;
};

class RR {
    @observable count: number;
    constructor() {
        this.count = 0;

        setInterval(() => {
            this.count++;
        }, 1000);
    }
}

const rr = new RR();

//const tt: any = "312321";

//fff(tt);
//fff("31321a");

@observer
export class App extends React.Component<PropsType> {
    render() {
        const { name } = this.props;

        const aa: List<number> = List();
        aa.sizea;
        const bb = aa.push(1);
        const cc = bb.push(2);
        const dd = cc.push('a');

        const def = Record({
            a: '',
            b: ''
        });


        const lll = new def();

        console.info('AAA', lll.a);
        console.info('BBB', lll.b);
        console.info('CCC', lll.c);

        const lll2 = new def({
            a: 'dasdas',
            b: 3213
        });

        return (
            <div ggg="fsdfds">
                App komponent3 - { name } - { rr.count }
                <Link href="#" aa="dasda">Click me</Link>
            </div>
        );
    }
}
