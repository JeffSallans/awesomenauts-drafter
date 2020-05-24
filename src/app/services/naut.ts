import { NautType } from './naut-type';

export interface Naut {
    /* The id of the naut, and file name of their picture under assets/nauts/ */
    id: string;
    /* The display name of the naut */
    name: string;
    /* Type of naut */
    type?: NautType;
    /* Type of rarity */
    tier?: string;
    /* True if the naut is golden */
    isGolden: boolean;
}