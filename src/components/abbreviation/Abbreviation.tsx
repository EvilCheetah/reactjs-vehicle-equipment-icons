import { AbbreviationItem } from "./AbbreviationItem";
import { IEquipment } from "../../interface/equipment.interface";
import { Equipment } from "../../types/equipment.type";


export function Abbreviation({ equipment }: IEquipment)
{  
    return (
        <div className="abbreviation">
            {   
                equipment.map(
                    (equipment_type: Equipment) =>
                    {
                        return (
                            <AbbreviationItem
                                key={equipment_type[0]}
                                equipment_type={equipment_type}
                            />
                        );
                    }
                )
            }
        </div>
    );
}