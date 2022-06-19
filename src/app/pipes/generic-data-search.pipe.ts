import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'genericDataSearch'
})
export class GenericDataSearchPipe implements PipeTransform {

  transform(data: any[], searchtext: string): any[] {
    if (searchtext === '') {
      return data;
    } else {
      const filteredData = [];
      for (let candidateData of data) {
        for (let key of Object.keys(candidateData)) {
          if (String(candidateData[key]).toLowerCase().includes(searchtext.toLowerCase())) {
            filteredData.push(candidateData);
          }
        }
      }
      return filteredData;
    }
  }

}