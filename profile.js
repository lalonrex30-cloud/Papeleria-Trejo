/* ==========================================================================
   ESTILOS ESPECÍFICOS PARA LA PANTALLA DE PERFIL (Warm Minimalism)
   ========================================================================== */

.profile-main-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 900px;
}

/* Tarjeta contenedora de datos */
.profile-card-section {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    gap: 2.5rem;
}

/* Columna Izquierda: Manejo del Avatar */
.avatar-column {
    flex: 0 0 200px;
    display: flex;
    justify-content: center;
}

.avatar-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
}

.profile-avatar-img {
    width: 150px;
    height: 150px;
    border-radius: 12px;
    object-fit: cover;
    background-color: #f1f5f9;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
}

.btn-upload {
    background-color: #0f172a;
    color: #ffffff;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.2s;
    position: relative;
    overflow: hidden;
}

.btn-upload:hover {
    background-color: #1e293b;
}

.btn-upload input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.btn-remove-avatar {
    background: none;
    border: 1px solid #e2e8f0;
    color: #64748b;
    padding: 0.4rem 1rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-remove-avatar:hover {
    background-color: #fef2f2;
    color: #ef4444;
    border-color: #fca5a5;
}

/* Columna Derecha: Formulario */
.form-column {
    flex: 1;
}

.profile-form-layout {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-field label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #475569;
}

.form-field input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #0f172a;
    background-color: #f8fafc;
    outline: none;
    transition: all 0.2s;
}

.form-field input:focus {
    background-color: #ffffff;
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.08);
}

.form-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
}

.btn-save-profile {
    background-color: #3b82f6;
    color: #ffffff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.2s;
}

.btn-save-profile:hover {
    background-color: #2563eb;
}

.btn-reset-profile {
    background-color: transparent;
    border: 1px solid #e2e8f0;
    color: #64748b;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-reset-profile:hover {
    background-color: #f1f5f9;
    color: #334155;
}

/* ==========================================================================
   Sección del Historial de Pedidos
   ========================================================================== */
.history-section h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.orders-timeline {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.order-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: box-shadow 0.2s;
}

.order-card:hover {
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.02);
}

.order-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.order-id {
    font-weight: 700;
    color: #0f172a;
    font-size: 0.95rem;
}

.order-meta {
    color: #64748b;
    font-size: 0.85rem;
}

.order-total strong {
    font-size: 1.1rem;
    color: #10b981; /* Verde esmeralda para montos exitosos */
    font-weight: 700;
}

/* Ajustes de responsivo internos */
@media (max-width: 820px) {
    .profile-card-section {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .avatar-column {
        flex: 0 0 auto;
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