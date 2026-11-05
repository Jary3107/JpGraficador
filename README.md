# Visualización Interactiva de Curvas en el Espacio 3D: Longitud de Arco y Curvatura

Herramienta web interactiva orientada al cálculo analítico y la renderización tridimensional dinámica de curvas paramétricas, facilitando la comprensión intuitiva de conceptos clave de geometría diferencial.

## 📌 Descripción del Proyecto
En el estudio del cálculo multivariable y la física aplicada, la visualización de trayectorias en $\mathbb{R}^3$ suele presentar una alta barrera conceptual. Esta plataforma web permite al usuario ingresar funciones vectoriales parametrizadas $\vec{r}(t) = \langle f(t), g(t), h(t) \rangle$ y definir intervalos de evaluación para calcular y proyectar en tiempo real:
- **Longitud de arco ($L$):**
  $$L = \int_{a}^{b} \sqrt{[f'(t)]^2 + [g'(t)]^2 + [h'(t)]^2} \, dt$$
- **Curvatura ($\kappa$):**
  $$\kappa = \frac{\|\vec{r}\,'(t) \times \vec{r}\,''(t)\|}{\|\vec{r}\,'(t)\|^3}$$
- **Vectores asociados:** Proyección del vector tangente unitario $\vec{T}(t)$ y la trayectoria espacial de la curva.

## 🛠️ Stack Tecnológico
- **Frontend:** HTML5, CSS3, JavaScript (ES6+).
- **Librería Gráfica:** [Plotly.js](https://plotly.com/javascript/) para la renderización matemática interactiva en 2D y 3D.
- **Entorno de Prototipado:** CodePen.

## ✨ Características Principales
- Entrada flexible de funciones paramétricas con límites configurables.
- Gráficos 3D interactivos con rotación de cámara, zoom y exploración espacial en tiempo real.
- Algoritmos implementados en JavaScript para evaluación numérica de derivadas y longitud de arco.

## 👥 Autores
- Jary Alejandra Preston Oliveros

*Institución Universitaria Politécnico Grancolombiano*
