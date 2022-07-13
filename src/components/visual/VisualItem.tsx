import { get_item_visibility } from "../../function/get-item-visibility.function";
import { EquipmentTypeProp } from "../../interface/equipment-type-prop.interface";
import { GetEquipmentIcon } from "./GetEquipmentIcon";


export function VisualItem({ equipment_type }: EquipmentTypeProp)
{
    const {equipment_name, is_included} = equipment_type;

    return (
        <div
            className={`visual-item ${ get_item_visibility(is_included) }`}
        >
            <GetEquipmentIcon equipment_name={equipment_name} />
        </div>
    );
}