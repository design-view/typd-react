import React from 'react';
type GreetingsPrps = {
    name:string;
    mark: string
}
const Greetings = ({ name, mark }: GreetingsPrps) => {
    return (
        <div>
            Hello,{name} {mark} 
        </div>
    );
};

export default Greetings;