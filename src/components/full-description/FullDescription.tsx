import './FullDescription.css'
import { EquipmentProp } from '../../interface/equipment-prop.interface';
import { FullDescriptionItem } from './FullDescriptionItem';
import { Equipment } from '../../interface/equipment.interface';


export function FullDescription({ equipment }: EquipmentProp)
{
    return (
        <div className="full-description">
            {   
                equipment.map(
                    (equipment_type: Equipment) =>
                    {
                        return (
                            <FullDescriptionItem
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