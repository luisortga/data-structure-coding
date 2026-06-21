from typing import TypedDict

class Superintendente(TypedDict):
    construccion_om: str
    construccion_oe: str

class Gerencia(TypedDict):
    superintendente: Superintendente
    presupuesto: int
    projecto: str
    date_meta: str

gerencia: Gerencia = {
    'superintendente': {
        'construccion_om': 'max',
        'construccion_oe': 'vertsteppend'
    },
    'presupuesto': 18_000_000,
    'projecto': 'dos bocas',
    'date_meta': '10/10/2026'
}

gerencia['presupuesto'] += 10_000_000