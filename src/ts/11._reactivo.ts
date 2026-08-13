import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// 1. Obtenemos la referencia a un elemento del DOM
const button = document.getElementById('myButton') as HTMLButtonElement;

// 2. Crear un Observable a partir de los eventos 'click' del botón
const clicks$ = fromEvent<MouseEvent>(button, 'click');

// 3. Modificar el flujo con operadores usando .pipe()
const doubleClicks$ = clicks$.pipe(
  // Transformamos el evento extrayendo solo la coordenada X
  map((event: MouseEvent) => event.clientX),
  
  // Filtramos para responder solo cuando el clic sea en la mitad derecha del botón/pantalla
  filter((clientX: number) => clientX > 200)
);

// 4. Suscribirse al flujo para reaccionar (Observer)
const subscription = doubleClicks$.subscribe({
  next: (positionX) => {
    console.log(`¡Clic detectado en la posición X: ${positionX}!`);
  },
  error: (err) => {
    console.error('Ocurrió un error:', err);
  },
  complete: () => {
    console.log('El flujo ha finalizado');
  }
});

// Opción para cancelar la suscripción cuando ya no sea necesaria
// subscription.unsubscribe();