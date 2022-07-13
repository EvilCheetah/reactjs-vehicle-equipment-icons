import { POSSIBLE_EQUIPMENT } from "../components/constant/equipment.constant";
import { Equipment } from "../interface/equipment.interface";
import { EquipmentName } from "../types/equipment-name.type";


function _find_equipment(vehicle_equipment: Array<string>, equipment_to_find: string): boolean
/// Checks whether `equipment` is within `vehicle_equipment` is in array case insensitively
{
    return vehicle_equipment.some( 
        (equipment) => ( equipment.toLowerCase() === equipment_to_find.toLowerCase() )
    );
}


export function convert_equipment(vehicle_equipment: Array<EquipmentName>): Equipment[]
/// Converts an Array of included Equipment to
/// Array of Objects of All Possible eqipment
{
    return POSSIBLE_EQUIPMENT.map(
        (possible_equipment) =>
        {
            return {
                equipment_name: possible_equipment,
                is_included:    _find_equipment(vehicle_equipment, possible_equipment)
            }
        }
    )
}