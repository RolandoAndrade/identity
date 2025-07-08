# Identity

Identity es un proyecto de inteligencia artificial que implementa un sistema de desbloqueo facial. Dada la imagen de una persona, el modelo es capaz de identificar quién es y, si corresponde, desbloquear el dispositivo. Este enfoque busca simplificar el acceso a dispositivos, evitando métodos tradicionales como pines o patrones.



https://github.com/user-attachments/assets/38c5540e-3b8e-451a-908f-366ab19fe28a



## Descripción General
- **Parte teórica:** Consulta el archivo `Problemas hiperdimensionales.pdf` para una explicación detallada de los fundamentos teóricos, incluyendo SVMs, clasificación multiclase, kernels, visión por computadora, PCA y técnicas de tuning como GridSearch y CrossValidation.
- **Parte práctica:** El desarrollo y la implementación del modelo se encuentran en el notebook `Identity.ipynb`.

## Flujo de trabajo
1. **Recopilación de datos:** Se utiliza el dataset LFW (Labeled Faces in the Wild) de sklearn para obtener imágenes faciales etiquetadas.
2. **Preprocesamiento:** Se seleccionan y preparan las imágenes y etiquetas para el entrenamiento.
3. **Entrenamiento:** Se entrena un modelo SVM (Support Vector Machine) con búsqueda de hiperparámetros usando GridSearch y validación cruzada.
4. **Evaluación:** Se analiza el desempeño del modelo con métricas de clasificación.
5. **Despliegue:** El modelo se expone mediante una API Flask, con opción de acceso remoto usando ngrok.

## Archivos principales
- `Identity.ipynb`: Notebook con todo el flujo de trabajo práctico, desde la carga de datos hasta el despliegue del modelo.
- `Problemas hiperdimensionales.pdf`: Documento con la explicación teórica y fundamentos matemáticos.

## Requisitos
- Python 3.8+
- Paquetes: scikit-learn, matplotlib, numpy, Flask, pyngrok, requests, Pillow

Puedes instalar los requisitos principales con:
```bash
pip install scikit-learn matplotlib numpy Flask pyngrok requests Pillow
```

## Ejecución
1. Abre y ejecuta el notebook `Identity.ipynb` para entrenar y probar el modelo.
2. Para exponer la API, asegúrate de tener un token de ngrok y sigue las instrucciones en el notebook.

## Notas
- El modelo está pensado como una demostración educativa. Para aplicaciones reales de reconocimiento facial, se recomienda explorar modelos más avanzados como DeepFace.
- El código y los ejemplos están en español.

## Autor
Rolando Andrade

---

Este proyecto es solo con fines educativos.

