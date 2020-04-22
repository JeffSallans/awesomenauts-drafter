import { forIn, map } from 'lodash';

export class KeyDescriptionPair {
    value: string;
    description: string;
}

/**
 * Extended functionality around Enums
 * @see - https://stackoverflow.com/a/51398471
 */
export class Enum implements KeyDescriptionPair {
    value: string;
    description: string;

    constructor(value: string, description: string) {
        this.value = value;
        this.description = description;
    }

    /** Returns all the enum pairs defined */
    static getAllPairs(): KeyDescriptionPair[] {
        const result = [];

        /** Loops through all static type properties on the class that called this function */
        forIn(this, (propValue, propName) => {
            if (propValue instanceof KeyDescriptionPair) {
            result.push(propValue);
            }
        });
        return result;
    }

    /** Returns one of the defined Enums on this enum list for a given value */
    static getEnumFromValue(value: string): Enum {
        let targetEnum = null;
        /** Loops through all static type properties on the class that called this function */
        forIn(this, (propValue, propName) => {
          if (propValue instanceof KeyDescriptionPair && propValue.value === value) {
            targetEnum = propValue;
          }
        });
        return targetEnum;
    }

    /** Returns one of the defined Enums on this enum list for a given description */
    static getEnumFromDescription(description: string): Enum {
        let targetEnum = null;
        /** Loops through all static type properties on the class that called this function */
        forIn(this, (propValue, propName) => {
          if (propValue instanceof KeyDescriptionPair && propValue.description === description) {
            targetEnum = propValue;
          }
        });
        return targetEnum;
      }
}