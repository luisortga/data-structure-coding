#
import concurrent.futures
import time

def download_url(url: str) -> str:
    print(f'Descargando {url}...')
    time.sleep(2) # simulando una tarea que toma 2 segundos
    print(f'Descarga de {url} terminada!')
    return f'Resultado de {url}'

urls: list[str] = list()
urls.append('www.topesdegama.com')
urls.append('www.programadorpragmatico.com')
urls.append('www.wc3.com')
urls.append('www.indeed.com')

# Usamos ThreadPoolExecutor con un pool de 4 hilos
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    # Mapeamos la funcion a nuestra lista de URL's
    result = executor.map(download_url, urls)

# 4 hilos corriendo en paralelo simulado por el GIL
for res in result:
    print(result)