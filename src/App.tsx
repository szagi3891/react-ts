import * as React from 'react';

interface PropsType {
    name: string
};

class FF {
    name: string;
    constructor() {
        this.name = "dadsada"
    }
}

const fff = (arg: number): number => {
    return arg + 1;
};

//const tt: any = "312321";

//fff(tt);
//fff("31321a");

export class App extends React.Component<PropsType> {
    render() {
        const { name } = this.props;

        return (
            <div> App komponent3 - { name } </div>
        );
    }
}
