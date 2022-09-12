import { IEquipmentName } from "../../interface/equipment-name.interface";

import { AirRide } from "../icons/air-ride/AirRide";
import { DockHigh } from "../icons/dock-high/DockHigh";
import { Dolly } from "../icons/dolly/Dolly";
import { ETrack } from "../icons/e-track/ETrack";
import { HazardousMaterial } from "../icons/hazardous-material/HazardousMaterial";
import { LiftGate } from "../icons/lift-gate/LiftGate";
import { PalletJack } from "../icons/pallet-jack/PalletJack";
import { Ramp } from "../icons/ramp/Ramp";
import { SideDoor } from "../icons/side-door/SideDoor";
import { TemperatureControl } from "../icons/temperature-control/TemperatureControl";


export function GetEquipmentIcon({ equipment_name }: IEquipmentName)
{
    switch ( equipment_name.toLowerCase() )
    {
        case ('dock high'):
            return <DockHigh />;
        
        case ('pallet jack'): 
            return <PalletJack />;

        case ('side door'):
            return <SideDoor />;
        
        case ('air ride'):
            return <AirRide />;
        
        case ('ramps'):
            return <Ramp />;
        
        case ('lift gate'):
            return <LiftGate />;
        
        case ('temp control'):
            return <TemperatureControl />;
        
        case ('dolly'):
            return <Dolly />;
        
        case ('e-track'):
            return <ETrack />;
        
        case ('haz-mat'):
            return <HazardousMaterial />;

        default:
            throw new Error('Wasn\'t able to identify equipment. Please, check your API or modify `GetEquipmentIcon` component.')
    }
}