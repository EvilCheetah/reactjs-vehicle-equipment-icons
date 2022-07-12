import './FullDescription.css'
import { Equipment } from '../../types/equipment.type';
import { IEquipment } from '../../interface/equipment.interface';
import { FullDescriptionItem } from './FullDescriptionItem';


export function FullDescription({ equipment }: IEquipment)
{
    return (
        <div className="full-description">
            {   
                equipment.map(
                    (equipment_type: Equipment) =>
                    {
                        return (
                            <FullDescriptionItem
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