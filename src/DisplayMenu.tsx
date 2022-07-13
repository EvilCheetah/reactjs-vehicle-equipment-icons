import './DisplayMenu.css';
import data from './data.json';
import { Abbreviation } from './components/abbreviation/Abbreviation';
import { FullDescription } from './components/full-description/FullDescription';
import { Visual } from './components/visual/Visual';
import { Equipment } from './interface/equipment.interface';


export function DisplayMenu()
{
    const equipment: Equipment[] = data;

    return (
        <div className="display-menu">
            <Abbreviation equipment={equipment} />
            <FullDescription equipment={equipment} />
            <Visual equipment={equipment} />
        </div>
    );
}