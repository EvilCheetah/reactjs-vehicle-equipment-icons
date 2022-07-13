import { get_item_visibility } from "../../function/get-item-visibility.function";
import { EquipmentType } from "../../interface/equipment-type.interface";


export function FullDescriptionItem({ equipment_type }: EquipmentType)
{
    const [equipment_name, is_included] = equipment_type;

    return (
        <span
            className={`full-description-item ${ get_item_visibility(is_included) }`}
        >
            { equipment_name }
        </span>
    );
}