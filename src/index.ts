const add = (a: number, b: number) => {
  return a + b;
};

const result: number = add(3, 4);

console.log(result);

const skillName = (name: string, level: number) => {
  return `skill name : ${name} - Level ${level}`;
};

const result1 = skillName("Maquetter une application", 2);

console.log(result1);

//**************************************************************************** */

interface ISkill {
    name: string
    description: string
    optionProp?: number
    getSkill: () => string
    getDescription: () => string
}

type skillProps = {
    name: string,
    description: string
    optionProp?: number
}

class Skill implements ISkill {
    public name: string;
    public description: string;
    public optionProp?: number;

    constructor(props: skillProps) {
        this.name = props.name;
        this.description = props.description;
        this.optionProp = props.optionProp
    }

    public getSkill(): string {
        return `Skill : ${this.name}`
    }

    public getDescription(): string {
        return `Description : ${this.description}`
    }
}

const skill1Props = {
    name: "Collaborer à la gestion...",
    description: "Collaborer à la gestion description ...",
}

const skill1: Skill = new Skill(skill1Props);

console.log(skill1.getSkill());