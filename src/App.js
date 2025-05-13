import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Car, Cpu, BarChart3, Lock, Globe } from 'lucide-react';

// Componente principal de la landing page
const MovAILanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  // Efecto para capturar el scroll y aplicar animaciones
  useEffect(() => {
    const handleScroll = () => {
      // Usar requestAnimationFrame para suavizar la actualización del estado
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para cambiar la opacidad basada en la posición de scroll - con transición más suave
  const getOpacity = (startFade, endFade) => {
    if (scrollY < startFade) return 1;
    if (scrollY > endFade) return 0;
    return 1 - (scrollY - startFade) / (endFade - startFade);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Demostración solicitada. Te contactaremos pronto.');
    setEmail('');
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />
      </div>

      {/* Navegación */}
      <nav className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              MovAI
            </span>
          </div>
          
          {/* Menú de navegación en desktop */}
          <div className="hidden md:flex space-x-6">
            <NavLink text="Inicio" active={true} />
            <NavLink text="Soluciones" />
            <NavLink text="Tecnología" />
            <NavLink text="Casos de uso" />
            <NavLink text="Contacto" />
          </div>
          
          {/* Botón de menú en mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-70 transition-all"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
        
        {/* Menú mobile desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <NavLink text="Inicio" active={true} mobile />
              <NavLink text="Soluciones" mobile />
              <NavLink text="Tecnología" mobile />
              <NavLink text="Casos de uso" mobile />
              <NavLink text="Contacto" mobile />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div 
          className="container mx-auto px-4 py-20 flex flex-col items-center text-center"
          style={{ opacity: getOpacity(0, 300) }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <AnimatedText text="El Futuro de la Movilidad" />
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-teal-400">
              <AnimatedText text="Impulsado por IA" delay={1000} />
            </span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Transformamos la seguridad del transporte con tecnología de inteligencia artificial 
            que detecta fatiga, monitorea conducción y previene accidentes con precisión superior al 85%.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Descubrir soluciones
            </button>
            <button className="px-8 py-3 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300">
              Demo en vivo
            </button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Sección Características */}
      <section className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Tecnología de Vanguardia
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Shield className="w-12 h-12 text-blue-400" />}
              title="Seguridad Avanzada"
              description="Sistemas de prevención de accidentes y detección de amenazas en tiempo real mediante algoritmos de aprendizaje profundo."
            />
            
            <FeatureCard 
              icon={<Car className="w-12 h-12 text-blue-400" />}
              title="Análisis de Conducción"
              description="Monitoreo de líneas de carril y detección de maniobras peligrosas para prevenir accidentes y mejorar la seguridad vial."
            />
            
            <FeatureCard 
              icon={<Cpu className="w-12 h-12 text-teal-400" />}
              title="Procesamiento Edge"
              description="Análisis de datos en el borde para decisiones inmediatas sin depender de conexiones a la nube."
            />
            
            <FeatureCard 
              icon={<BarChart3 className="w-12 h-12 text-blue-400" />}
              title="Dashboard en Tiempo Real"
              description="Monitoreo centralizado de conductores y vehículos con análisis de información en tiempo real para una gestión de flota eficiente."
            />
            
            <FeatureCard 
              icon={<Shield className="w-12 h-12 text-purple-400" />}
              title="Detección de Fatiga"
              description="Análisis facial en tiempo real que detecta parpadeos, bostezos y posición de la cabeza para prevenir accidentes por fatiga del conductor."
            />
            
            <FeatureCard 
              icon={<Globe className="w-12 h-12 text-teal-400" />}
              title="Sistema de Notificaciones"
              description="Alertas inmediatas al conductor y centralizadas para la administración, mejorando la respuesta ante eventos de riesgo."
            />
          </div>
        </div>
      </section>

      {/* Sección Tecnología */}
      <section className="min-h-screen py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Nuestra Tecnología
            </span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <TechnologyAnimation />
            </div>
            
            <div className="w-full md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Tecnología MovAI</h3>
              <p className="text-gray-300 mb-6">
                Nuestra plataforma integra visión computacional avanzada y procesamiento en el borde para monitorear 
                conductores en tiempo real, con tecnología que funciona 24/7 y una precisión superior al 85%.
              </p>
              
              <ul className="space-y-4">
                <TechItem title="Redes Neuronales" percentage={90} />
                <TechItem title="Visión Computacional" percentage={85} />
                <TechItem title="Procesamiento de Lenguaje Natural" percentage={80} />
                <TechItem title="Aprendizaje por Refuerzo" percentage={75} />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Casos de Uso */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Casos de Uso
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <UseCaseCard 
              number="01"
              title="Empresas de Transporte"
              description="Monitoreo de conductores en tiempo real, reduciendo incidentes por fatiga y mejorando la seguridad de pasajeros y carga."
            />
            
            <UseCaseCard 
              number="02"
              title="Transporte Seguro"
              description="Sistemas de monitoreo que reducen los accidentes por fatiga en un 73% y mejoran la seguridad general de los pasajeros."
            />
            
            <UseCaseCard 
              number="03"
              title="Flotas de Vehículos"
              description="Monitoreo continuo de conductores que opera 24/7, escalable a toda la flota de buses y camiones de transporte."
            />
            
            <UseCaseCard 
              number="04"
              title="Gestión de Riesgos"
              description="Analítica predictiva que identifica patrones de comportamiento de riesgo y permite implementar medidas preventivas."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Mejora la Seguridad de tu Flota
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            Con precisión superior al 85%, nuestra tecnología funciona 24/7 y es escalable
            a todos tus vehículos. Solicita una demostración para ver cómo podemos reducir los riesgos.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                className="w-full px-4 py-3 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <button 
                onClick={handleSubmit}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Solicitar Demostración
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Logo small />
              <span className="ml-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                MovAI
              </span>
            </div>
            
            <div className="flex space-x-6">
              <FooterLink text="Política de Privacidad" />
              <FooterLink text="Términos de Uso" />
              <FooterLink text="Contacto" />
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2025 MovAI. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Componentes auxiliares
const Logo = ({ small }) => {
  const size = small ? "w-8 h-8" : "w-10 h-10";
  
  return (
    <div className={`${size} rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center`}>
      <div className="w-3/4 h-3/4 rounded-full bg-black flex items-center justify-center">
        <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
      </div>
    </div>
  );
};

const NavLink = ({ text, active, mobile }) => {
  const baseClasses = "font-medium transition-all duration-300";
  const mobileClasses = mobile ? "block py-2" : "";
  const activeClasses = active ? "text-blue-400" : "text-gray-300 hover:text-white";
  
  return (
    <a href="#" className={`${baseClasses} ${mobileClasses} ${activeClasses}`}>
      {text}
    </a>
  );
};

const FooterLink = ({ text }) => {
  return (
    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
      {text}
    </a>
  );
};

const AnimatedText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [text]);
  
  return <span>{displayText}</span>;
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 group">
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const UseCaseCard = ({ number, title, description }) => {
  return (
    <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-start">
        <div className="text-4xl font-bold text-purple-500 opacity-50 mr-4">{number}</div>
        <div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

const TechItem = ({ title, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{title}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const ParticleBackground = () => {
  const particles = Array(70).fill().map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1.5,
    opacity: Math.random() * 0.6 + 0.2,
    speed: Math.random() * 0.3 + 0.8 // Velocidades más consistentes y lentas
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2.5}px ${particle.size}px rgba(59, 130, 246, 0.6)`,
            animation: `floatParticle ${25 + (particle.size * 5)}s infinite ease-in-out` // Animación más lenta y suave
          }}
        />
      ))}
      <style jsx>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(10px);
          }
          75% {
            transform: translateY(5px) translateX(5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

const TechnologyAnimation = () => {
  return (
    <div className="relative h-80 w-full rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 overflow-hidden">
      {/* Simulación de la malla de reconocimiento facial */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center">
          {/* Simular puntos de detección facial */}
          <div className="w-40 h-40 relative">
            {Array(30).fill().map((_, i) => {
              const angle = Math.random() * Math.PI * 2;
              const radius = Math.random() * 20;
              const left = 50 + Math.cos(angle) * radius;
              const top = 50 + Math.sin(angle) * radius;
              
              return (
                <div 
                  key={i} 
                  className="absolute w-1.5 h-1.5 bg-teal-400 rounded-full"
                  style={{ 
                    left: `${left}%`, 
                    top: `${top}%`,
                    opacity: 0.8,
                    boxShadow: '0 0 5px rgba(45, 212, 191, 0.7)'
                  }}
                ></div>
              );
            })}
            
            {/* Líneas de conexión */}
            {Array(20).fill().map((_, i) => {
              const startAngle = Math.random() * Math.PI * 2;
              const endAngle = Math.random() * Math.PI * 2;
              const startRadius = Math.random() * 20;
              const endRadius = Math.random() * 20;
              
              const x1 = 50 + Math.cos(startAngle) * startRadius;
              const y1 = 50 + Math.sin(startAngle) * startRadius;
              const x2 = 50 + Math.cos(endAngle) * endRadius;
              const y2 = 50 + Math.sin(endAngle) * endRadius;
              
              return (
                <div 
                  key={i}
                  className="absolute h-px bg-teal-400/30"
                  style={{
                    width: `${Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))}%`,
                    left: `${x1}%`,
                    top: `${y1}%`,
                    transform: `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`,
                    transformOrigin: 'left center',
                    opacity: 0.6
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 right-4">
        <div className="px-3 py-1 bg-teal-500/20 border border-teal-500/40 rounded-md text-teal-400 text-xs font-mono">
          Detección Activa
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 h-20 bg-gray-900 bg-opacity-90 rounded-lg p-3">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse mr-2"></div>
          <div className="text-sm text-teal-400 font-medium">Estado: Alerta</div>
        </div>
        <div className="h-2 w-4/5 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full mb-2"></div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>Nivel de fatiga: 32%</span>
          <span>Precisión: 94%</span>
        </div>
      </div>
    </div>
  );
};

export default MovAILanding;