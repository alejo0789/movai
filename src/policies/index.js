import React, { useState } from 'react';
import { Shield, Eye, Lock, Server, UserCheck, FileText, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const PrivacyPolicy = () => {
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
              MovAI
            </span>
          </div>
          <a href="/" className="text-gray-400 hover:text-white transition-colors">
            Volver al inicio
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Política de Privacidad
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Tu privacidad y seguridad son nuestra prioridad
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
            <div className="mb-12 p-6 rounded-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30">
              <p className="text-gray-300 leading-relaxed">
                En <span className="text-blue-400 font-semibold">MovAI</span>, nos comprometemos a proteger tu privacidad y la de tus datos. 
                Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos la información personal 
                cuando utilizas nuestra plataforma de monitoreo de conductores y seguridad vial basada en inteligencia artificial.
              </p>
            </div>

            {/* Secciones */}
            <div className="space-y-6">
              
              {/* Sección 1 */}
              <PolicySection
                icon={<FileText className="w-6 h-6" />}
                title="1. Información que Recopilamos"
                expanded={expandedSection === 1}
                onToggle={() => toggleSection(1)}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">1.1 Datos de Video y Análisis Facial</h4>
                    <p className="text-gray-300 mb-2">Recopilamos y procesamos:</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Imágenes de video del rostro del conductor para detección de fatiga</li>
                      <li>Datos de parpadeos, bostezos y posición de la cabeza</li>
                      <li>Información sobre el estado de atención del conductor</li>
                      <li>Grabaciones de eventos de riesgo detectados</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">1.2 Datos de Conducción</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Detección de líneas de carril y desviaciones</li>
                      <li>Maniobras de conducción y comportamiento vial</li>
                      <li>Velocidad, aceleración y frenado</li>
                      <li>Ubicación GPS del vehículo</li>
                      <li>Datos de telemetría del vehículo</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">1.3 Información de la Cuenta</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Nombre completo y datos de contacto</li>
                      <li>Correo electrónico y número de teléfono</li>
                      <li>Información de la empresa y rol</li>
                      <li>Credenciales de acceso (contraseña cifrada)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">1.4 Datos Técnicos</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Dirección IP y tipo de dispositivo</li>
                      <li>Navegador y sistema operativo</li>
                      <li>Registros de actividad en la plataforma</li>
                      <li>Datos de rendimiento y uso del sistema</li>
                    </ul>
                  </div>
                </div>
              </PolicySection>

              {/* Sección 2 */}
              <PolicySection
                icon={<Eye className="w-6 h-6" />}
                title="2. Cómo Utilizamos tu Información"
                expanded={expandedSection === 2}
                onToggle={() => toggleSection(2)}
              >
                <div className="space-y-4 text-gray-300">
                  <p>Utilizamos la información recopilada para:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li><span className="text-gray-300 font-medium">Monitoreo de seguridad:</span> Detectar fatiga, distracciones y comportamientos de riesgo en tiempo real</li>
                    <li><span className="text-gray-300 font-medium">Prevención de accidentes:</span> Generar alertas inmediatas al conductor y a la administración</li>
                    <li><span className="text-gray-300 font-medium">Análisis de conducción:</span> Evaluar patrones de comportamiento y generar reportes de desempeño</li>
                    <li><span className="text-gray-300 font-medium">Mejora del sistema:</span> Entrenar y optimizar nuestros algoritmos de IA</li>
                    <li><span className="text-gray-300 font-medium">Gestión de flotas:</span> Proporcionar dashboard en tiempo real y análisis centralizados</li>
                    <li><span className="text-gray-300 font-medium">Cumplimiento normativo:</span> Mantener registros según requerimientos legales</li>
                    <li><span className="text-gray-300 font-medium">Soporte técnico:</span> Resolver problemas y mejorar la experiencia del usuario</li>
                  </ul>
                </div>
              </PolicySection>

              {/* Sección 3 */}
              <PolicySection
                icon={<Server className="w-6 h-6" />}
                title="3. Procesamiento Edge y Almacenamiento de Datos"
                expanded={expandedSection === 3}
                onToggle={() => toggleSection(3)}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">3.1 Procesamiento en el Borde (Edge Computing)</h4>
                    <p className="text-gray-300 mb-2">
                      MovAI utiliza tecnología de procesamiento edge que realiza el análisis de datos directamente en el dispositivo:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>El análisis facial y de conducción se procesa localmente en tiempo real</li>
                      <li>Solo se transmiten a la nube eventos relevantes y datos agregados</li>
                      <li>Las imágenes de video no se almacenan de forma continua, solo en eventos de riesgo</li>
                      <li>Minimizamos la transferencia de datos para proteger tu privacidad</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">3.2 Almacenamiento de Datos</h4>
                    <p className="text-gray-300 mb-2">Los datos se almacenan en:</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Servidores seguros con cifrado en reposo y en tránsito</li>
                      <li>Centros de datos certificados con estándares internacionales</li>
                      <li>Backups automáticos con redundancia geográfica</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">3.3 Retención de Datos</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Videos de eventos de riesgo: 90 días (personalizable según contrato)</li>
                      <li>Datos de telemetría y análisis: 1 año</li>
                      <li>Información de cuenta: Durante la vigencia del servicio más 2 años</li>
                      <li>Registros de acceso y auditoría: Según requerimientos legales</li>
                    </ul>
                  </div>
                </div>
              </PolicySection>

              {/* Sección 4 */}
              <PolicySection
                icon={<Lock className="w-6 h-6" />}
                title="4. Compartir Información"
                expanded={expandedSection === 4}
                onToggle={() => toggleSection(4)}
              >
                <div className="space-y-4 text-gray-300">
                  <p>No vendemos ni alquilamos tu información personal. Compartimos datos solo en estos casos:</p>
                  
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">4.1 Con tu Empresa</h4>
                    <p className="text-gray-400">
                      Los administradores de tu empresa tienen acceso a los datos de conducción y eventos de seguridad 
                      para gestionar la flota y garantizar la seguridad.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">4.2 Proveedores de Servicio</h4>
                    <p className="text-gray-400 mb-2">
                      Compartimos información con proveedores que nos ayudan a operar nuestro servicio:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Servicios de hosting en la nube</li>
                      <li>Proveedores de análisis de datos</li>
                      <li>Servicios de notificaciones</li>
                    </ul>
                    <p className="text-gray-400 mt-2">
                      Todos los proveedores firman acuerdos de confidencialidad y solo procesan datos según nuestras instrucciones.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">4.3 Requerimientos Legales</h4>
                    <p className="text-gray-400">
                      Podemos divulgar información cuando sea requerido por ley, orden judicial o autoridades competentes.
                    </p>
                  </div>
                </div>
              </PolicySection>

              {/* Sección 5 */}
              <PolicySection
                icon={<Shield className="w-6 h-6" />}
                title="5. Seguridad de los Datos"
                expanded={expandedSection === 5}
                onToggle={() => toggleSection(5)}
              >
                <div className="space-y-4 text-gray-300">
                  <p>Implementamos medidas de seguridad robustas para proteger tu información:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li><span className="text-gray-300 font-medium">Cifrado:</span> TLS/SSL para datos en tránsito y AES-256 para datos en reposo</li>
                    <li><span className="text-gray-300 font-medium">Control de acceso:</span> Autenticación multifactor y control de acceso basado en roles</li>
                    <li><span className="text-gray-300 font-medium">Monitoreo:</span> Sistemas de detección de intrusos y auditorías de seguridad continuas</li>
                    <li><span className="text-gray-300 font-medium">Pruebas:</span> Evaluaciones de seguridad periódicas y pruebas de penetración</li>
                    <li><span className="text-gray-300 font-medium">Capacitación:</span> Personal entrenado en mejores prácticas de seguridad</li>
                    <li><span className="text-gray-300 font-medium">Anonimización:</span> Datos agregados y anonimizados cuando sea posible</li>
                  </ul>
                </div>
              </PolicySection>

              {/* Sección 6 */}
              <PolicySection
                icon={<UserCheck className="w-6 h-6" />}
                title="6. Tus Derechos"
                expanded={expandedSection === 6}
                onToggle={() => toggleSection(6)}
              >
                <div className="space-y-4 text-gray-300">
                  <p>Como usuario, tienes los siguientes derechos sobre tu información personal:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li><span className="text-gray-300 font-medium">Acceso:</span> Solicitar una copia de los datos que tenemos sobre ti</li>
                    <li><span className="text-gray-300 font-medium">Corrección:</span> Actualizar información incorrecta o incompleta</li>
                    <li><span className="text-gray-300 font-medium">Eliminación:</span> Solicitar la eliminación de tus datos personales (sujeto a obligaciones legales)</li>
                    <li><span className="text-gray-300 font-medium">Portabilidad:</span> Recibir tus datos en formato estructurado y legible</li>
                    <li><span className="text-gray-300 font-medium">Restricción:</span> Limitar el procesamiento de tus datos en ciertas circunstancias</li>
                    <li><span className="text-gray-300 font-medium">Oposición:</span> Objetar ciertos tipos de procesamiento de datos</li>
                  </ul>
                  <p className="mt-4">
                    Para ejercer estos derechos, contacta a nuestro equipo de privacidad en{' '}
                    <a href="mailto:privacy@movaiti.com" className="text-blue-400 hover:text-blue-300">
                      privacy@movaiti.com
                    </a>
                  </p>
                </div>
              </PolicySection>

              {/* Sección 7 */}
              <PolicySection
                icon={<FileText className="w-6 h-6" />}
                title="7. Cookies y Tecnologías Similares"
                expanded={expandedSection === 7}
                onToggle={() => toggleSection(7)}
              >
                <div className="space-y-4 text-gray-300">
                  <p>Utilizamos cookies y tecnologías similares para:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Mantener tu sesión activa en la plataforma</li>
                    <li>Recordar tus preferencias de usuario</li>
                    <li>Analizar el uso de nuestra plataforma para mejoras</li>
                    <li>Proporcionar contenido personalizado</li>
                  </ul>
                  <p className="mt-4 text-gray-400">
                    Puedes gestionar las cookies desde la configuración de tu navegador. Ten en cuenta que 
                    deshabilitar ciertas cookies puede afectar la funcionalidad de la plataforma.
                  </p>
                </div>
              </PolicySection>

              {/* Sección 8 */}
              <PolicySection
                icon={<Shield className="w-6 h-6" />}
                title="8. Privacidad de Menores"
                expanded={expandedSection === 8}
                onToggle={() => toggleSection(8)}
              >
                <div className="text-gray-300">
                  <p>
                    MovAI no está dirigido a menores de 18 años. No recopilamos intencionalmente información 
                    personal de menores. Si nos enteramos de que hemos recopilado datos de un menor sin el 
                    consentimiento parental apropiado, tomaremos medidas para eliminar esa información.
                  </p>
                </div>
              </PolicySection>

              {/* Sección 9 */}
              <PolicySection
                icon={<Mail className="w-6 h-6" />}
                title="9. Cambios a esta Política"
                expanded={expandedSection === 9}
                onToggle={() => toggleSection(9)}
              >
                <div className="text-gray-300">
                  <p className="mb-4">
                    Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre 
                    cambios significativos mediante:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Correo electrónico a tu dirección registrada</li>
                    <li>Notificación prominente en nuestra plataforma</li>
                    <li>Actualización de la fecha de "Última actualización" en la parte superior</li>
                  </ul>
                  <p className="mt-4 text-gray-400">
                    Te recomendamos revisar esta política regularmente para estar informado sobre cómo 
                    protegemos tu información.
                  </p>
                </div>
              </PolicySection>

              {/* Sección 10 */}
              <PolicySection
                icon={<Mail className="w-6 h-6" />}
                title="10. Contacto"
                expanded={expandedSection === 10}
                onToggle={() => toggleSection(10)}
              >
                <div className="text-gray-300">
                  <p className="mb-4">
                    Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad 
                    o el manejo de tus datos personales, puedes contactarnos en:
                  </p>
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <p className="mb-2"><span className="text-blue-400 font-semibold">Email:</span> privacy@movaiti.com</p>
                    <p className="mb-2"><span className="text-blue-400 font-semibold">Soporte técnico:</span> support@movaiti.com</p>
                    <p className="mb-2"><span className="text-blue-400 font-semibold">Dirección:</span> [Tu dirección física]</p>
                    <p><span className="text-blue-400 font-semibold">Teléfono:</span> [Tu número de teléfono]</p>
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
                MovAI
              </span>
            </div>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
              <a href="/policies" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Términos de Uso</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2025 MovAI. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Componente de sección de política
const PolicySection = ({ icon, title, children, expanded, onToggle }) => {
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 hover:border-blue-500/30 transition-colors">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-900/50 transition-colors"
      >
        <div className="flex items-center">
          <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        {expanded ? (
          <ChevronUp className="w-6 h-6 text-blue-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400" />
        )}
      </button>
      
      {expanded && (
        <div className="p-6 pt-0 border-t border-gray-800">
          {children}
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;