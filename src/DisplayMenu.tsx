import './DisplayMenu.css';
import data from './data.json';

import { Visual } from './components/visual/Visual';
import { Abbreviation } from './components/abbreviation/Abbreviation';
import { FullDescription } from './components/full-description/FullDescription';

import { Equipment } from './interface/equipment.interface';
import { convert_equipment } from './function/convert-equipment.funciton';


export function DisplayMenu()
{
    const equipment: Equipment[] = convert_equipment(data);

    return (
        <div className="display-menu">
            <Abbreviation equipment={equipment} />
            <FullDescription equipment={equipment} />
            <Visual equipment={equipment} />
        </div>
    );
}