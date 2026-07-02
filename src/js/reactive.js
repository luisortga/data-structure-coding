import { interval, Observable } from 'rxjs'
import { map, filter } from 'rxjs/operators'

const contador = interval(1000)

/*
contador
  .pipe(
    map(valor => valor * 2),
    filter(valor => valor % 4 === 0)
  )
  .subscribe(valor => console.log('Valor recibido:', valor)) */

const cold$ = new Observable((observer) => {
  observer.next(Math.round(Math.random() * 10))
})

cold.subscribe((res) => {
  console.log(res)
})


