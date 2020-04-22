import { Enum } from './enum';

export class NautType extends Enum {
    static TANK = new NautType('TANK', 'Tank');
    static HEALER = new NautType('HEALER', 'Healer');
    static SUPPORT = new NautType('SUPPORT', 'Support');
    static ASSASSIN = new NautType('ASSASSIN', 'Assassin');
    static HARASSER = new NautType('HARASSER', 'Harasser');

    constructor(value, description) {
        super(value, description);
    }
}