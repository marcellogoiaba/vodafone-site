import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byManufacturer'
})
export class ByManufacturerPipe implements PipeTransform {

  transform(devices: any, manufacturer: any): any {
    //checks if no filter selected return all devices 
    if(manufacturer === undefined) return devices;

    //return updated devices array
    return devices.filter((device) => {
      return device.manufacturer.toLowerCase().includes(manufacturer.toLowerCase())
    })

  }

}
