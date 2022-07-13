import './Abbreviation.css';
import { EquipmentType } from "../../interface/equipment-type.interface";
import { get_item_visibility } from '../../function/get-item-visibility.function';


export function AbbreviationItem({ equipment_type }: EquipmentType)
{
    const [equipment_name, is_included] = equipment_type;

    return (
        <abbr
            className={`abbreviation-item ${ get_item_visibility(is_included) }`}
            title={equipment_name}
        >
            { 
                /// Get Abbreviation from the Words
                /// Credit: https://bit.ly/3B0U3w7
                equipment_name.match(/\b([A-Z])/g)?.join('') 
            }
        </abbr>
    );
}