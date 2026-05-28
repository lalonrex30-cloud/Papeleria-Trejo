/* ==========================================================================
   ESTILOS ESPECÍFICOS PARA LA PANTALLA DEL CARRITO
   ========================================================================== */

/* Distribución del contenido: Lista (izquierda) y Resumen (derecha) */
.cart-main-layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 2rem;
    align-items: start;
}

.cart-list-section {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.cart-top-actions {
    margin-bottom: 1.5rem;
}

.cart-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Fila individual del producto */
.cart-item {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
}

/* Caja contenedora de la foto del artículo */
.cart-item .thumb {
    width: 70px;
    height: 70px;
    border-radius: 8px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e2e8f0;
    overflow: hidden;
    padding: 4px;
}

/* Estilo estricto para que la imagen real no se deforme */
.cart-item .thumb img.cart-thumb-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
}

.cart-item .info {
    flex: 1;
}

.cart-item .info .title {
    font-weight: 600;
    font-size: 1rem;
    color: #0f172a;
}

.cart-item .info .meta {
    color: #64748b;
    font-size: 0.85rem;
    margin-top: 0.25rem;
}

.cart-item .controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

/* Selectores de cantidad minimalistas */
.qty-selector {
    display: flex;
    align-items: center;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    background-color: #ffffff;
    overflow: hidden;
}

.qty-btn {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
}

.qty-btn:hover {
    background-color: #f1f5f9;
}

.qty-input {
    width: 45px;
    border: none;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    outline: none;
}

/* Ocultar flechas por defecto de inputs numéricos */
.qty-input::-webkit-outer-spin-button,
.qty-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.line-total {
    font-weight: 700;
    color: #0f172a;
    width: 85px;
    text-align: right;
    font-size: 1rem;
}

.remove-btn {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    padding: 0.25rem;
}

.remove-btn:hover {
    text-decoration: underline;
}

/* Sección de carrito vacío */
.empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 4rem 1rem;
    color: #94a3b8;
}

.empty-icon {
    font-size: 3.5rem;
    color: #cbd5e1;
}

.hidden {
    display: none !important;
}

/* Tarjeta del Resumen de Compra lateral */
.summary-card {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.summary-card h3 {
    margin-bottom: 1.25rem;
    font-size: 1.15rem;
    color: #0f172a;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    color: #64748b;
    font-size: 0.95rem;
}

.summary-divider {
    border: 0;
    height: 1px;
    background-color: #e2e8f0;
    margin: 1rem 0;
}

.total {
    font-size: 1.2rem;
    color: #0f172a;
}

/* Botones adaptados */
.btn-primary-action {
    width: 100%;
    background-color: #3b82f6;
    color: #ffffff;
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.95rem;
    margin-top: 1.25rem;
    transition: background 0.2s;
}

.btn-primary-action:hover {
    background-color: #2563eb;
}

.btn-secondary {
    background-color: #f1f5f9;
    border: 1px solid #e2e8f0;
    color: #475569;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.btn-secondary:hover {
    background-color: #e2e8f0;
}

.btn-ghost-action {
    width: 100%;
    background: none;
    border: 1px solid #e2e8f0;
    color: #94a3b8;
    padding: 0.6rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.btn-ghost-action:hover {
    background-color: #fef2f2;
    color: #ef4444;
    border-color: #fca5a5;
}

/* Responsivo */
@media (max-width: 1150px) {
    .cart-main-layout {
        grid-template-columns: 1fr;
    }
}
/* Asegura que la imagen se adapte perfectamente al recuadro del carrito */
.cart-item .thumb img.cart-thumb-img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ajusta la foto sin estirarla ni cortarla */
    border-radius: 4px;  /* Esquinas ligeramente redondeadas */
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