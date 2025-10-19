import React, { useState } from 'react';

const WhatsAppPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
              </div>
            </div>
            <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Movaiti
            </span>
          </div>
          <a href="/" className="text-gray-400 hover:text-white transition-colors">
            Volver al inicio
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-blue-900/10 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-600 to-blue-600 mb-6">
              <span className="text-4xl">💬</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                Política de Mensajería WhatsApp
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Bot de Agendamiento de Citas y Automatización de Procesos
            </p>
            <p className="text-gray-400">
              Última actualización: 19 de octubre de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introducción */}
            <div className="mb-12 p-6 rounded-lg bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                Bienvenido al servicio de mensajería automatizada por WhatsApp de <span className="text-green-400 font-semibold">Movaiti</span>. 
                Nuestro bot inteligente está diseñado para facilitar el agendamiento de citas, automatizar procesos empresariales 
                y mejorar la comunicación con nuestros clientes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Esta política describe cómo funciona nuestro servicio de WhatsApp, qué información recopilamos a través 
                de las conversaciones, cómo la utilizamos y protegemos, y cuáles son tus derechos como usuario.
              </p>
            </div>

            {/* Info importante */}
            <div className="mb-8 p-6 rounded-lg bg-green-900/10 border border-green-500/30 flex items-start">
              <span className="text-2xl mr-3 flex-shrink-0">✅</span>
              <div>
                <h4 className="text-green-400 font-semibold mb-2">Servicio Oficial Autorizado</h4>
                <p className="text-gray-300">
                  Utilizamos la API oficial de WhatsApp Business y cumplimos con todas las políticas de Meta 
                  para garantizar un servicio seguro y confiable.
                </p>
              </div>
            </div>

            {/* Políticas de Seguridad */}
            <div className="mb-12 p-6 rounded-lg bg-blue-900/10 border border-blue-500/30">
              <div className="flex items-start mb-4">
                <span className="text-2xl mr-3 flex-shrink-0">🔐</span>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
                  Políticas de Seguridad y Cumplimiento
                </h3>
              </div>
              
              <p className="text-gray-300 mb-4">
                Nuestro servicio cumple con los más altos estándares de seguridad y privacidad establecidos por Meta/WhatsApp:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-blue-400 font-semibold mb-2">🔒 Cifrado E2E</h4>
                  <p className="text-gray-400 text-sm">
                    Todos los mensajes están protegidos con cifrado de extremo a extremo garantizado por WhatsApp
                  </p>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-blue-400 font-semibold mb-2">🛡️ Protección de Datos</h4>
                  <p className="text-gray-400 text-sm">
                    Cumplimos con GDPR, LGPD y normativas internacionales de protección de datos personales
                  </p>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-blue-400 font-semibold mb-2">✅ API Oficial</h4>
                  <p className="text-gray-400 text-sm">
                    Uso exclusivo de WhatsApp Business API oficial, sin modificaciones no autorizadas
                  </p>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-blue-400 font-semibold mb-2">🚫 Anti-Spam</h4>
                  <p className="text-gray-400 text-sm">
                    Respeto estricto de las políticas anti-spam y límites de mensajería de WhatsApp
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/70 p-5 rounded-lg border border-blue-500/30">
                <h4 className="text-blue-400 font-semibold mb-3">📚 Revisa las Políticas Oficiales de Meta/WhatsApp:</h4>
                <div className="space-y-2">
                  <a 
                    href="https://www.whatsapp.com/legal/privacy-policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-green-400 hover:text-green-300 transition-colors underline"
                  >
                    → Política de Privacidad de WhatsApp
                  </a>
                  <a 
                    href="https://www.whatsapp.com/legal/business-policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-green-400 hover:text-green-300 transition-colors underline"
                  >
                    → Política Comercial de WhatsApp Business
                  </a>
                  <a 
                    href="https://www.whatsapp.com/legal/terms-of-service" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-green-400 hover:text-green-300 transition-colors underline"
                  >
                    → Términos de Servicio de WhatsApp
                  </a>
                  <a 
                    href="https://developers.facebook.com/docs/whatsapp/overview/compliance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-green-400 hover:text-green-300 transition-colors underline"
                  >
                    → Cumplimiento y Regulaciones de WhatsApp Business API
                  </a>
                  <a 
                    href="https://www.facebook.com/privacy/policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-green-400 hover:text-green-300 transition-colors underline"
                  >
                    → Política de Privacidad de Meta
                  </a>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  * Los enlaces abren en una nueva pestaña y te llevan a los sitios oficiales de Meta/WhatsApp
                </p>
              </div>
            </div>

            {/* Secciones */}
            <div className="space-y-6">
              
              {/* Sección 1 */}
              <PolicySection
                emoji="💬"
                title="1. Descripción del Servicio"
                expanded={expandedSection === 1}
                onToggle={() => toggleSection(1)}
              >
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Nuestro bot de WhatsApp proporciona los siguientes servicios automatizados:
                  </p>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">1.1 Agendamiento de Citas</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Consulta de disponibilidad en tiempo real</li>
                      <li>Reserva y confirmación automática de citas</li>
                      <li>Modificación y cancelación de citas existentes</li>
                      <li>Recordatorios automáticos antes de las citas</li>
                      <li>Notificaciones de cambios o actualizaciones</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">1.2 Automatización de Procesos</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Respuestas automáticas a preguntas frecuentes</li>
                      <li>Envío de información y documentación</li>
                      <li>Seguimiento de solicitudes y trámites</li>
                      <li>Notificaciones de estado de procesos</li>
                      <li>Recopilación de información para formularios</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">1.3 Atención al Cliente</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Respuesta inmediata 24/7 a consultas básicas</li>
                      <li>Escalamiento a agentes humanos cuando sea necesario</li>
                      <li>Gestión de quejas y sugerencias</li>
                      <li>Encuestas de satisfacción</li>
                    </ul>
                  </div>
                </div>
              </PolicySection>

              {/* Sección 2 */}
              <PolicySection
                emoji="📄"
                title="2. Información que Recopilamos"
                expanded={expandedSection === 2}
                onToggle={() => toggleSection(2)}
              >
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    A través de nuestro servicio de WhatsApp, recopilamos la siguiente información:
                  </p>

                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">2.1 Información de Contacto</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Número de teléfono de WhatsApp</li>
                      <li>Nombre de perfil de WhatsApp</li>
                      <li>Foto de perfil (si está disponible públicamente)</li>
                      <li>Nombre completo proporcionado durante la conversación</li>
                      <li>Correo electrónico (si es solicitado y proporcionado)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">2.2 Información de Conversación</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Contenido de los mensajes enviados y recibidos</li>
                      <li>Fecha y hora de cada interacción</li>
                      <li>Archivos multimedia compartidos (imágenes, documentos, etc.)</li>
                      <li>Respuestas a preguntas del bot</li>
                      <li>Información proporcionada para completar formularios</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">2.3 Información de Citas y Servicios</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Tipo de servicio o cita solicitada</li>
                      <li>Fecha y hora de las citas agendadas</li>
                      <li>Historial de citas (pasadas y futuras)</li>
                      <li>Preferencias de horario y ubicación</li>
                      <li>Comentarios o notas sobre el servicio</li>
                    </ul>
                  </div>
                </div>
              </PolicySection>

              {/* Sección 3 */}
              <PolicySection
                emoji="✅"
                title="3. Cómo Utilizamos tu Información"
                expanded={expandedSection === 3}
                onToggle={() => toggleSection(3)}
              >
                <div className="space-y-4 text-gray-300">
                  <p>Utilizamos la información recopilada para:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li><span className="text-gray-300 font-medium">Gestión de citas:</span> Procesar, confirmar, modificar y recordar citas agendadas</li>
                    <li><span className="text-gray-300 font-medium">Automatización de procesos:</span> Ejecutar flujos de trabajo y responder consultas automáticamente</li>
                    <li><span className="text-gray-300 font-medium">Comunicación:</span> Enviar notificaciones, recordatorios y actualizaciones relevantes</li>
                    <li><span className="text-gray-300 font-medium">Personalización:</span> Adaptar respuestas basadas en tu historial e interacciones</li>
                    <li><span className="text-gray-300 font-medium">Mejora del servicio:</span> Analizar conversaciones para optimizar el bot</li>
                    <li><span className="text-gray-300 font-medium">Soporte técnico:</span> Resolver problemas y atender consultas específicas</li>
                  </ul>
                </div>
              </PolicySection>

              {/* Sección 4 */}
              <PolicySection
                emoji="⏰"
                title="4. Tipos de Mensajes que Enviamos"
                expanded={expandedSection === 4}
                onToggle={() => toggleSection(4)}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">4.1 Mensajes Transaccionales</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Confirmaciones de citas agendadas</li>
                      <li>Recordatorios de citas próximas (24-48 horas antes)</li>
                      <li>Notificaciones de cambios o cancelaciones</li>
                      <li>Respuestas a tus consultas directas</li>
                      <li>Actualizaciones de estado de procesos en curso</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">4.2 Mensajes Promocionales (Requieren tu consentimiento)</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Ofertas especiales y promociones</li>
                      <li>Nuevos servicios disponibles</li>
                      <li>Noticias y actualizaciones de la empresa</li>
                    </ul>
                    <p className="text-gray-400 mt-3">
                      <span className="text-green-400 font-medium">Importante:</span> Solo enviaremos mensajes promocionales 
                      si has dado tu consentimiento explícito. Puedes cancelar en cualquier momento.
                    </p>
                  </div>
                </div>
              </PolicySection>

              {/* Sección 5 */}
              <PolicySection
                emoji="🔒"
                title="5. Privacidad y Seguridad"
                expanded={expandedSection === 5}
                onToggle={() => toggleSection(5)}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Cifrado de Mensajes</h4>
                    <p className="text-gray-300 mb-2">
                      WhatsApp utiliza cifrado de extremo a extremo para proteger tus conversaciones.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Retención de Datos</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Conversaciones activas: Durante la relación comercial</li>
                      <li>Historial de citas: 2 años después de la última cita</li>
                      <li>Datos de contacto: Hasta que solicites la eliminación</li>
                    </ul>
                  </div>
                </div>
              </PolicySection>

              {/* Sección 6 */}
              <PolicySection
                emoji="👤"
                title="6. Tus Derechos y Opciones"
                expanded={expandedSection === 6}
                onToggle={() => toggleSection(6)}
              >
                <div className="space-y-4">
                  <h4 className="text-green-400 font-semibold mb-2">Comandos Útiles</h4>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                    <ul className="space-y-2 text-gray-400">
                      <li><code className="text-green-400 bg-gray-800 px-2 py-1 rounded">AYUDA</code> - Ver opciones disponibles</li>
                      <li><code className="text-green-400 bg-gray-800 px-2 py-1 rounded">STOP</code> - Cancelar mensajes promocionales</li>
                      <li><code className="text-green-400 bg-gray-800 px-2 py-1 rounded">PRIVACIDAD</code> - Ver información sobre tus datos</li>
                      <li><code className="text-green-400 bg-gray-800 px-2 py-1 rounded">ELIMINAR</code> - Solicitar eliminación de datos</li>
                      <li><code className="text-green-400 bg-gray-800 px-2 py-1 rounded">HABLAR CON HUMANO</code> - Contactar con un agente</li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-300 mt-4">
                    Puedes ejercer tus derechos de acceso, corrección, eliminación y portabilidad de datos en cualquier momento.
                  </p>
                </div>
              </PolicySection>

              {/* Sección 7 */}
              <PolicySection
                emoji="📧"
                title="7. Contacto y Soporte"
                expanded={expandedSection === 7}
                onToggle={() => toggleSection(7)}
              >
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    Para consultas sobre esta política o el servicio de WhatsApp:
                  </p>

                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <div className="space-y-3">
                      <div>
                        <p className="text-green-400 font-semibold mb-1">Email de Privacidad:</p>
                        <p className="text-gray-400">whatsapp-privacy@movaiti.com</p>
                      </div>
                      
                      <div>
                        <p className="text-green-400 font-semibold mb-1">Soporte Técnico:</p>
                        <p className="text-gray-400">support@movaiti.com</p>
                      </div>
                      
                      <div>
                        <p className="text-green-400 font-semibold mb-1">Teléfono:</p>
                        <p className="text-gray-400">[Tu número de teléfono]</p>
                      </div>
                      
                      <div>
                        <p className="text-green-400 font-semibold mb-1">Horario de Atención:</p>
                        <p className="text-gray-400">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-400">Sábados: 9:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PolicySection>

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
                </div>
              </div>
              <span className="ml-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Movaiti
              </span>
            </div>
            
            <div className="flex justify-center space-x-6 mb-6 flex-wrap">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
              <a href="/policies" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
              <a href="/policies-whatsapp" className="text-gray-400 hover:text-white transition-colors">Política WhatsApp</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
            </div>
            
            <div className="text-gray-500 text-sm mb-4">
              © 2025 Movaiti. Todos los derechos reservados.
            </div>
            
            <div className="text-gray-600 text-xs">
              Este servicio utiliza la API oficial de WhatsApp Business. WhatsApp es una marca registrada de Meta Platforms, Inc.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Componente de sección simplificado
const PolicySection = ({ emoji, title, children, expanded, onToggle }) => {
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 hover:border-green-500/30 transition-colors">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-900/50 transition-colors"
      >
        <div className="flex items-center">
          <div className="text-3xl mr-4">{emoji}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <span className="text-2xl text-gray-400">
          {expanded ? '−' : '+'}
        </span>
      </button>
      
      {expanded && (
        <div className="p-6 pt-0 border-t border-gray-800">
          {children}
        </div>
      )}
    </div>
  );
};

export default WhatsAppPolicy;