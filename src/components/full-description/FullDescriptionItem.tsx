import { EquipmentType } from "../../interface/equipment-type.interface";


export function FullDescriptionItem({ equipment_type }: EquipmentType)
{
    const [equipment_name, is_included] = equipment_type;

    return (
        <span
            className={`full-description-item ${is_included ? 'included' : 'absent'}`}
        >
            { equipment_name }
        </span>
    );
}