// Importamos las funciones necesarias de RxJS
const { fromEvent, interval } = rxjs;
const { map, filter, debounceTime, takeUntil } = rxjs.operators;

// Ejemplo 1: Observable simple con interval
const contador$ = interval(1000); // emite un número cada segundo

const suscripcion = contador$
  .pipe(
    map(valor => valor * 2),        // transforma cada valor
    filter(valor => valor % 4 === 0) // solo deja pasar múltiplos de 4
  )
  .subscribe(valor => console.log('Valor recibido:', valor));

// Detenemos la emisión después de 10 segundos
setTimeout(() => suscripcion.unsubscribe(), 10000);


// Ejemplo 2: Reactividad con eventos del DOM (buscador con debounce)
const input = document.querySelector('#buscador');

const busqueda$ = fromEvent(input, 'input').pipe(
  map(evento => evento.target.value),
  filter(texto => texto.length > 2),   // solo busca si hay más de 2 letras
  debounceTime(300)                    // espera 300ms sin escribir antes de emitir
);

busqueda$.subscribe(texto => {
  console.log('Buscando:', texto);
  // aquí podrías llamar a una API, por ejemplo
});