import './Visual.css';
import { VisualItem } from "./VisualItem";
import { Equipment } from "../../types/equipment.type";
import { IEquipment } from "../../interface/equipment.interface";


export function Visual({ equipment }: IEquipment)
{  
    return (
        <div className="visual">
            {   
                equipment.map(
                    (equipment_type: Equipment) =>
                    {
                        return (
                            <VisualItem
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