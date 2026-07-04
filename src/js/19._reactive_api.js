import { fromEvent, Subject, of, merge, timer } from 'rxjs';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  tap,
  retry
} from 'rxjs/operators';

// API's
function buscarEnAPI(texto) {
  return new Promise((resolve, reject) => {
    const demora = Math.random() * 1000; // latencia simulada
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`Fallo de red buscando "${texto}"`));
      } else {
        resolve([`${texto}-resultado1`, `${texto}-resultado2`]);
      }
    }, demora);
  });
}

// --- Simulamos la entrada de un usuario escribiendo ---
// En vez de un input real del DOM, usamos un Subject:
// un Subject es como un EventEmitter que además es un Observable.
const entradaUsuario$ = new Subject();

const busqueda$ = entradaUsuario$.pipe(
  map(texto => texto.trim()),
  filter(texto => texto.length > 2),
  debounceTime(300),           // espera a que el usuario deje de escribir
  distinctUntilChanged(),      // ignora si escribió lo mismo que antes
  tap(texto => console.log(`\n🔎 Buscando: "${texto}"...`)),
  switchMap(texto =>
    // switchMap cancela la búsqueda anterior si llega una nueva letra
    // antes de que termine (evita resultados "viejos" pisando a los nuevos)
    of(texto).pipe(
      switchMap(t =>
        buscarEnAPI(t)
      ),
      retry(1), // si falla, reintenta una vez antes de rendirse
      catchError(err => {
        console.log(`⚠️  Error: ${err.message} (usando resultado vacío)`);
        return of([]); // en vez de romper el stream, devolvemos algo seguro
      })
    )
  )
);

busqueda$.subscribe({
  next: resultados => console.log('✅ Resultados:', resultados),
  error: err => console.log('❌ Error no manejado:', err),
  complete: () => console.log('Stream completado')
});

// --- Simulamos que el usuario escribe con el tiempo ---
const escrituraSimulada = ['j', 'ja', 'jav', 'java', 'javascript'];

escrituraSimulada.forEach((texto, i) => {
  setTimeout(() => entradaUsuario$.next(texto), i * 200);
});

// Una segunda búsqueda más tarde, para ver distinctUntilChanged en acción
setTimeout(() => entradaUsuario$.next('python'), 3000);
setTimeout(() => entradaUsuario$.next('python'), 3200); // se ignora, es igual