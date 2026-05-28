/* ==========================================================================
   1. VARIABLES Y CONFIGURACIÓN GENERAL (Estilo Japandi / Warm Minimalism)
   ========================================================================== */
:root {
    --bg-main: #f8fafc;
    --sidebar-bg: #0f172a; /* Azul marino oscuro */
    --sidebar-active: #3b82f6; /* Azul brillante para el menú activo */
    --text-main: #1e293b;
    --text-muted: #64748b;
    --accent-color: #ef4444; /* Color para favoritos (corazón) */
    --card-bg: #ffffff;
    --border-color: #e2e8f0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

body {
    background-color: var(--bg-main);
    color: var(--text-main);
    display: flex;
    min-height: 100vh;
    overflow-x: hidden;
}

/* Contenedor principal que divide la barra lateral del contenido */
.app-container {
    display: flex;
    width: 100%;
}

/* ==========================================================================
   2. BARRA LATERAL (SIDEBAR)
   ========================================================================== */
.sidebar {
    width: 260px;
    background-color: var(--sidebar-bg);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
}

.sidebar-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
}

.logo-icon {
    font-size: 1.5rem;
    color: var(--sidebar-active);
}

.sidebar-header h2 {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.sidebar-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    color: #94a3b8;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.menu-item:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05);
}

.menu-item.active {
    color: #ffffff;
    background-color: var(--sidebar-active);
}

.sidebar-footer {
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.75rem;
    color: #64748b;
    text-align: center;
}

/* ==========================================================================
   3. CONTENIDO PRINCIPAL Y HEADER
   ========================================================================== */
.main-content {
    flex: 1;
    margin-left: 260px; /* Deja el espacio libre para la sidebar fija */
    padding: 2rem 3rem;
}

.content-header {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.section-title h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.5px;
}

/* Buscador minimalista de papelería */
.search-container {
    position: relative;
    width: 100%;
    max-width: 600px;
}

.search-container i {
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
}

.search-container input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    border: 1px solid var(--border-color);
    border-radius: 99px; /* Bordes completamente redondeados */
    background-color: #ffffff;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.search-container input:focus {
    border-color: var(--sidebar-active);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

/* ==========================================================================
   4. SECCIONES Y CUADRÍCULA DE PRODUCTOS (GRID)
   ========================================================================== */
.catalog-section {
    margin-bottom: 3.5rem;
}

.catalog-section h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2rem;
}

/* ==========================================================================
   5. TARJETA DE PRODUCTO (PRODUCT CARD)
   ========================================================================== */
.product-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.25rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 380px;
    transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.04);
}

/* Botón de Favorito (Corazón) */
.fav-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #ffffff;
    border: 1px solid var(--border-color);
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--text-muted);
    z-index: 10;
    transition: all 0.2s;
}

.fav-btn:hover {
    transform: scale(1.1);
    color: var(--accent-color);
}

.fav-btn.is-favorite {
    color: var(--accent-color);
    background-color: #fef2f2;
    border-color: #fca5a5;
}

/* CONTENEDOR DE LA IMAGEN (Modificado a 180px) */
.product-image-placeholder {
    width: 100%;
    height: 180px;      /* Altura perfecta y ampliada */
    background-color: #ffffff; 
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;   
    padding: 10px;      
    margin-bottom: 1.25rem;
}

/* Regla para que la etiqueta <img> se adapte al contenedor grande */
.product-image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ajusta la imagen sin estirarla ni deformarla */
    border-radius: 8px;
}

/* Información del producto */
.product-info {
    margin-bottom: 1.25rem;
    flex-grow: 1;
}

.product-category {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-muted);
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.product-info h4 {
    font-size: 1.05rem;
    font-weight: 600;
    color: #0f172a;
    line-height: 1.4;
}

/* Fila inferior de precio y acción */
.product-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.75rem;
    border-top: 1px solid #f1f5f9;
}

.product-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
}

/* Botón "Agregar" */
.add-cart-btn {
    background-color: #f1f5f9;
    color: #334155;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
}

.add-cart-btn:hover {
    background-color: var(--sidebar-active);
    color: #ffffff;
}

/* Mensajes de catálogo vacío */
.empty-message {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem 1rem;
    color: var(--text-muted);
    font-style: italic;
    background: #ffffff;
    border: 1px dashed var(--border-color);
    border-radius: 12px;
}

/* ==========================================================================
   6. RESPONSIVO (PANTALLAS MEDIANAS Y PEQUEÑAS)
   ========================================================================== */
@media (max-width: 1024px) {
    .main-content {
        padding: 2rem;
    }
}

@media (max-width: 768px) {
    body {
        flex-direction: column;
    }
    .sidebar {
        position: relative;
        width: 100%;
        height: auto;
        padding: 1.5rem;
    }
    .sidebar-header {
        margin-bottom: 1.5rem;
    }
    .main-content {
        margin-left: 0;
        padding: 1.5rem;
    }
}
/* Ajuste para el nuevo logo en imagen de la barra lateral */
.sidebar-header .sidebar-logo-img {
    width: 40px;
    height: 40px;
    object-fit: contain; /* Evita que la imagen se distorsione */
    border-radius: 8px;  /* Le da un acabado suave en las esquinas */
    background-color: #ffffff; /* Fondo blanco por si tu imagen tiene fondo transparente */
    padding: 4px;
}