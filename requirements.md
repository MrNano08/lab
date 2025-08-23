PRD v0 — Calculadora de Riesgo (Likelihood × Impact)

Fecha: 23-ago-2025
Autor: Equipo de Producto
Estado: Borrador v0
Stack: React + TypeScript + Tailwind CSS (Front), NestJS (API Back)


---

1) Resumen ejecutivo

Construir una calculadora de riesgo básica que permita ingresar un riesgo (o varios), seleccionar Likelihood (probabilidad) y Impact (severidad) en una escala 1–5, y obtener el Overall Risk Severity = Likelihood × Impact. La interfaz debe ser simple y rápida, siguiendo el estilo de calculadoras públicas como la de HASpod (claridad, inputs directos, resultado visible y priorización de riesgos). 


---

2) Objetivos

Calcular y mostrar el nivel de riesgo con una matriz 5×5.

Priorizar visualmente (colores) Low / Medium / High / Extreme.

Experiencia minimalista inspirada en la calculadora de HASpod (sin copiar texto/estilos propietarios). 


No objetivos (v0):

Sin autenticación ni roles.

Sin almacenamiento persistente en BD (se puede usar memoria/LocalStorage).

Sin exportaciones PDF/Excel ni flujos de aprobación (posponer a v1+).



---

3) Usuarios y casos de uso

Usuario general / Analista: ingresa riesgos puntuales y obtiene su severidad para priorizar acciones.

Caso de uso principal:

1. Escribir “Título/Descripción del riesgo”.


2. Elegir Likelihood (1–5) y Impact (1–5).


3. Ver puntaje, categoría y posición en la Risk Matrix.


4. (Opcional) Agregar otro riesgo a una pequeña lista local para comparar.





---

4) Alcance (v0)

Una vista con:

Formulario mínimo: Título, Descripción (opcional), Likelihood (1–5), Impact (1–5).

Resultado instantáneo: puntaje (1–25) y categoría con color.

Risk Matrix 5×5 (estática) que resalte la celda del riesgo.

Lista local de riesgos (máx. 10) con orden por puntaje.


API NestJS opcional (mock):

Endpoint para reglas/umbrales (config por defecto).

Endpoint para calcular y devolver categoría (para aislar la lógica).




---

5) Reglas de negocio

Fórmula: Overall Risk Severity = Likelihood × Impact (1–25).

Escala 1–5 para ambos ejes.

Umbrales v0 (ajustables):

Low: 1–4

Medium: 5–9

High: 10–16

Extreme: 17–25


Validaciones:

Likelihood e Impact son enteros [1..5].

Título requerido (1–100 caracteres).



> Nota: El enfoque de matriz 5×5 es una práctica común para visualizar probabilidad vs. severidad y priorizar riesgos. 




---

6) Matriz de Riesgo (5×5)

Convención de colores: 🟩 Low / 🟨 Medium / 🟧 High / 🟥 Extreme

> Filas = Likelihood (1=baja … 5=alta)
Columnas = Impact (1=bajo … 5=alto)



Likelihood \ Impact	1	2	3	4	5

1	1 🟩 Low	2 🟩 Low	3 🟩 Low	4 🟩 Low	5 🟨 Medium
2	2 🟩 Low	4 🟩 Low	6 🟨 Medium	8 🟨 Medium	10 🟧 High
3	3 🟩 Low	6 🟨 Medium	9 🟨 Medium	12 🟧 High	15 🟧 High
4	4 🟩 Low	8 🟨 Medium	12 🟧 High	16 🟧 High	20 🟥 Extreme
5	5 🟨 Medium	10 🟧 High	15 🟧 High	20 🟥 Extreme	25 🟥 Extreme



---

7) Requerimientos funcionales

1. Ingreso de riesgo

Campos: title (req), description (opt), likelihood: 1..5, impact: 1..5.



2. Cálculo y categoría

Puntaje (score) = likelihood * impact.

Categoría según umbral v0.



3. UI dinámica

Mostrar pill de color con la categoría.

Resaltar la celda de la matriz correspondiente (e.g., borde y sombra).



4. Lista de riesgos

Agregar a lista local (máx. 10).

Orden descendente por score.

Eliminar elemento.



5. Accesibilidad

Contraste AA, labels claros, navegación por teclado.



6. Internacionalización básica

Soporte ES/EN (mínimo labels clave).



7. Inspiración de estilo

Layout minimalista con inputs claros y resultado visible, como la calculadora de HASpod (sin copiar contenido). 





---

8) Requerimientos no funcionales

Performance: cálculo instantáneo (<50 ms por interacción).

Disponibilidad: SPA estática; API mock local (Nest) para lógica.

Seguridad: sin datos sensibles; CORS abierto en dev.

Mantenibilidad: tipado estricto TS; funciones puras para la lógica.

Accesibilidad: WCAG 2.1 AA (focus states, aria-labels).



---

9) UX/UI (v0)

Layout: una sola página, dos columnas en desktop (Formulario | Resultado+Matriz), una columna en móvil.

Inputs: selectores o radio-groups 1–5 para Likelihood/Impact (descripciones breves en tooltip).

Resultado: tarjeta con score, categoría (color), breve guía (“High/Extreme → priorizar controles”).

Matriz: cuadrícula 5×5 con leyenda de colores y celda resaltada.

Lista: tabla compacta (título, L, I, score, categoría, borrar).


> Referencia de claridad y simplicidad: calculadora HASpod. 




---

10) Arquitectura & Tech

Front (React + TS + Tailwind):

Vite o Next (SPAv0 con Vite).

Componentes:

RiskForm.tsx

RiskResultCard.tsx

RiskMatrix.tsx

RiskList.tsx

useRiskCalculator.ts (hook con lógica pura)


Estado local (Zustand o React state simple v0).


Back (NestJS):

Módulo RiskModule

GET /api/config → umbrales y etiquetas.

POST /api/calc → { likelihood, impact } ⇒ { score, category }


Sin BD en v0 (in-memory).

Nota: El cálculo también puede hacerse 100% en front; la API se incluye para escalabilidad y separación de concerns.



---

11) Modelo de datos (v0)

type RiskInput = {
  title: string;
  description?: string;
  likelihood: 1|2|3|4|5;
  impact: 1|2|3|4|5;
};

type RiskItem = RiskInput & {
  id: string;           // uuid
  score: number;        // 1..25
  category: "Low" | "Medium" | "High" | "Extreme";
  createdAt: string;    // ISO
};


---

12) Contratos de API (NestJS)

GET /api/config → 200

{
  "scaleMin": 1,
  "scaleMax": 5,
  "thresholds": { "low":[1,4], "medium":[5,9], "high":[10,16], "extreme":[17,25] },
  "labels": { "likelihood":"Likelihood", "impact":"Impact" }
}

POST /api/calc (body: { likelihood, impact }) → 200

{ "score": 15, "category": "High" }


Errores (400): valores fuera de rango o tipos inválidos.


---

13) Lógica de cálculo (determinista)

score = likelihood * impact
if 1 <= score <= 4   → Low
if 5 <= score <= 9   → Medium
if 10 <= score <= 16 → High
if 17 <= score <= 25 → Extreme


---

14) Flujo principal

1. Usuario abre la página → carga config (opcional).


2. Completa Título, elige Likelihood y Impact.


3. La app calcula score y categoría en tiempo real y resalta la celda en la matriz.


4. (Opcional) “Agregar a lista” → aparece en tabla ordenada por score.


5. Puede eliminar ítems de la lista.




---

15) Criterios de aceptación (QA)

CA1: Con Likelihood=3 e Impact=5, la app muestra score=15 y High.

CA2: Con 1 × 1 → score=1 y Low; con 5 × 5 → score=25 y Extreme.

CA3: La celda (3,5) de la matriz aparece resaltada cuando se selecciona ese valor.

CA4: En móvil, no hay scroll horizontal; la matriz se adapta (min 320px).

CA5: Lista limitada a 10 elementos; el 11º no se agrega y muestra aviso.

CA6: Accesibilidad: todos los controles navegables con teclado y con aria-label.

CA7: Texto e iconografía coherentes con la leyenda de colores.



---

16) Métricas v0

% de cargas con cálculo mostrado < 1 s.

% de interacciones con feedback inmediato (<100 ms).

Tasa de uso de “Agregar a lista”.



---

17) Roadmap (post v0)

Persistencia (DB) y histórico de riesgos.

Exportar CSV/PDF y compartir.

Campos configurables, escalas 3×3/7×7, residual risk. 

Multiusuario, autenticación y comentarios.

Plantillas por dominio (salud y seguridad, TI, proyectos, etc.). 



---

18) Suposiciones y dependencias

La matriz 5×5 y los umbrales son aceptables para el piloto; se revisarán con stakeholders. 

Inspiración visual en la calculadora HASpod para mantener simplicidad y claridad. 



---

19) Especificaciones de implementación (resumen)

Front:

React 18 + TS, Tailwind, Vite.

Componentes desacoplados y probados (Jest/RTL).

Utilidades de accesibilidad (focus rings; aria-*).


Back:

NestJS 10, controladores ConfigController, CalcController.

Pipes para validación (class-validator).

CORS abierto en dev.



---

20) Ejemplos de test (unit)

calcCategory(1,1) → {score:1, "Low"}

calcCategory(2,5) → {score:10, "High"}

calcCategory(5,4) → {score:20, "Extreme"}

Validar rangos: likelihood=0 → 400.



---

Referencias (estilo y guía)

Calculadora de riesgo gratuita de HASpod (referencia de estilo y simplicidad). 

Uso/entendimiento de matriz 5×5 y medición de riesgo. 



---

> Nota legal: Este PRD usa referencias públicas solo con fines de inspiración de diseño/experiencia y no copia ni reutiliza contenidos o marcas registradas.