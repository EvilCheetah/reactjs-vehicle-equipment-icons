import './Abbreviation.css';
import { get_item_visibility } from '../../function/get-item-visibility.function';
import { EquipmentTypeProp } from '../../interface/equipment-type-prop.interface';


export function AbbreviationItem({ equipment_type }: EquipmentTypeProp)
{
    const {equipment_name, is_included} = equipment_type;

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