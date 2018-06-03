import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

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

        return (
            <div> App komponent3 - { name } - { rr.count } </div>
        );
    }
}
