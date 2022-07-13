import { IEquipmentName } from "./equipment-name.interface";
import { IIsIncluded } from "./is-included.interface";


export interface Equipment
extends
    IEquipmentName,
    IIsIncluded
{}