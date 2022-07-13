import './Visual.css';
import { VisualItem } from "./VisualItem";
import { Equipment } from '../../interface/equipment.interface';
import { EquipmentProp } from '../../interface/equipment-prop.interface';


export function Visual({ equipment }: EquipmentProp)
{  
    return (
        <div className="visual">
            {   
                equipment.map(
                    (equipment_type: Equipment) =>
                    {
                        return (
                            <VisualItem
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