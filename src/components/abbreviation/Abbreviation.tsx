import { EquipmentProp } from "../../interface/equipment-prop.interface";
import { Equipment } from "../../interface/equipment.interface";
import { AbbreviationItem } from "./AbbreviationItem";


export function Abbreviation({ equipment }: EquipmentProp)
{  
    return (
        <div className="abbreviation">
            {   
                equipment.map(
                    (equipment_type: Equipment) =>
                    {
                        return (
                            <AbbreviationItem
                                key={equipment_type['equipment_name']}
                                equipment_type={equipment_type}
                            />
                        );
                    }
                )
            }
        </div>
    );
}