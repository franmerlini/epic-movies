import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toEmbed',
  standalone: true,
})
export class ToEmbedPipe implements PipeTransform {
  transform(value: string) {
    return value.replace('watch?v=', 'embed/');
  }
}
