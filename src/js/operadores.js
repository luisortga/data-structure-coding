import { from } from 'rxjs';
import { filter, map, reduce, tap } from 'rxjs/operators';

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .pipe(
    filter(x => x % 2 === 0),
    tap(x => console.log('Después del filtro:', x)),
    map(x => x * x),
    reduce((acc, x) => acc + x, 0)
  )
  .subscribe(result => console.log('Resultado final:', result));