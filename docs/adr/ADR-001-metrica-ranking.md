# ADR-001: Métrica de ranking de videojuegos

**Contexto:**  
Necesitamos una métrica para ordenar los juegos en función de su puntuación y duración.

**Decisión:**  
La métrica se calculará como `durationHours / rating`, considerando menor valor como mejor posición.

**Alternativas consideradas:**  
- Usar rating/duration (inversa).
- Calcular una puntuación ponderada con media geométrica.

**Motivo:**  
La relación horas/punto refleja eficiencia del tiempo invertido significa que a juegos con mas puntuació, juegos que tienen mas calidad por hora de juego.
