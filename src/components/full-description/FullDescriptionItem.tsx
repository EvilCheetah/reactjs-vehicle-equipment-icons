import { get_item_visibility } from "../../function/get-item-visibility.function";
import { EquipmentTypeProp } from "../../interface/equipment-type-prop.interface";


export function FullDescriptionItem({ equipment_type }: EquipmentTypeProp)
{
    const {equipment_name, is_included} = equipment_type;

    return (
        <span
            className={`full-description-item ${ get_item_visibility(is_included) }`}
        >
            { equipment_name }
        </span>
    );
}