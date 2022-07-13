import { get_item_visibility } from "../../function/get-item-visibility.function";
import { EquipmentType } from "../../interface/equipment-type.interface";
import { GetEquipmentIcon } from "./GetEquipmentIcon";


export function VisualItem({ equipment_type }: EquipmentType)
{
    const [equipment_name, is_included] = equipment_type;

    return (
        <div
            className={`visual-item ${ get_item_visibility(is_included) }`}
        >
            <GetEquipmentIcon equipment_name={equipment_name} />
        </div>
    );
}