import './DisplayMenu.css';
import { Abbreviation } from './components/abbreviation/Abbreviation';
import data from './data.json';
import { Equipment } from './types/equipment.type';
import { FullDescription } from './components/full-description/FullDescription';
import { Visual } from './components/visual/Visual';


export function DisplayMenu()
{
    const equipment = data as Equipment[];

    return (
        <div className="display-menu">
            <Abbreviation equipment={equipment} />
            <FullDescription equipment={equipment} />
            <Visual equipment={equipment} />
        </div>
    );
}