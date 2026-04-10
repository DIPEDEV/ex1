/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('vis'), i * 80);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fu').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 4000);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
    }, 1200);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <nav id="nb" className={scrolled ? 'sc' : ''}>
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.984 12.81c-1.033-1.033-2.52-1.593-4.134-1.593-1.78 0-3.376.75-4.5 2.062-.375.468-1.125.468-1.5 0-1.124-1.312-2.72-2.062-4.5-2.062-1.614 0-3.101.56-4.134 1.593-1.406 1.407-1.78 3.563-.938 5.25.282.563 1.032.657 1.5.188 1.594-1.594 3.656-2.344 5.813-2.156.281 0 .562-.188.562-.469v-.094c0-.281.281-.469.563-.469.281 0 .562.188.562.469v.094c0 .281.281.469.562.469 2.157-.188 4.219.562 5.813 2.156.468.469 1.218.375 1.5-.188.842-1.687.468-3.843-.938-5.25z"/>
          </svg>
          El Navajero
        </a>
        <ul className="nl">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#testimonios">Reseñas</a></li>
          <li><a href="#cita" className="ncta">Reservar turno</a></li>
        </ul>
      </nav>

      <section className="hero" id="inicio">
        <div className="hi">
          <div>
            <div className="badge">· Barbería premium · Zapopan</div>
            <h1>Donde el estilo <span>se afina</span></h1>
            <p className="sub">Cortes clásicos y modernos, arreglo de barba y tratamientos capilares. Tu imagen, nuestra pasión desde 2015.</p>
            <div className="acts">
              <a href="#cita" className="bp">✂ Reservar turno</a>
              <a href="#servicios" className="bs">Ver servicios</a>
            </div>
            <div className="stats">
              <div><div className="sn">+5K</div><div className="sl">Clientes satisfechos</div></div>
              <div><div className="sn">10+</div><div className="sl">Años de experiencia</div></div>
              <div><div className="sn">4.8★</div><div className="sl">En Google</div></div>
            </div>
          </div>
          <div className="hv">
            <div className="hcard">
              <div className="hav" style={{ color: 'var(--gold)' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.984 12.81c-1.033-1.033-2.52-1.593-4.134-1.593-1.78 0-3.376.75-4.5 2.062-.375.468-1.125.468-1.5 0-1.124-1.312-2.72-2.062-4.5-2.062-1.614 0-3.101.56-4.134 1.593-1.406 1.407-1.78 3.563-.938 5.25.282.563 1.032.657 1.5.188 1.594-1.594 3.656-2.344 5.813-2.156.281 0 .562-.188.562-.469v-.094c0-.281.281-.469.563-.469.281 0 .562.188.562.469v.094c0 .281.281.469.562.469 2.157-.188 4.219.562 5.813 2.156.468.469 1.218.375 1.5-.188.842-1.687.468-3.843-.938-5.25z"/>
                </svg>
              </div>
              <div className="hinfo">
                <h3>El Navajero</h3>
                <p>Barbería · Zapopan, Jalisco</p>
                <span className="htag">✓ Abierto hoy</span>
              </div>
            </div>
            <div className="minis">
              <div className="mini"><div className="mii">⏱</div><strong>Sin espera</strong><span>Reserva tu turno online</span></div>
              <div className="mini"><div className="mii">💳</div><strong>Todas las formas</strong><span>Efectivo, tarjeta, transferencia</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="svcs" id="servicios">
        <div className="sh fu">
          <span className="sl2">Lo que hacemos</span>
          <h2>Nuestros servicios</h2>
          <p className="sd">Cada corte es una obra de arte. Atención personalizada en cada visita.</p>
        </div>
        <div className="sg">
          <div className="sc2 fu"><div className="si">✂️</div><h3>Corte Clásico</h3><p>Corte tradicional con tijera y navaja. Incluye lavado y estilizado final.</p><span className="sp">$120</span></div>
          <div className="sc2 fu"><div className="si">🪒</div><h3>Afeitado con Navaja</h3><p>Afeitado premium con toalla caliente, aceites y técnica de navaja recta.</p><span className="sp">$150</span></div>
          <div className="sc2 fu"><div className="si">🧔</div><h3>Arreglo de Barba</h3><p>Perfilado, delineado y acondicionamiento de barba con productos premium.</p><span className="sp">$100</span></div>
          <div className="sc2 fu"><div className="si">💈</div><h3>Combo Completo</h3><p>Corte + arreglo de barba + afeitado de cuello. El paquete más popular.</p><span className="sp">$200</span></div>
          <div className="sc2 fu"><div className="si">🧴</div><h3>Tratamiento Capilar</h3><p>Hidratación profunda, control de caspa o caída del cabello. Resultados desde la primera sesión.</p><span className="sp">$180</span></div>
          <div className="sc2 fu"><div className="si">👦</div><h3>Corte Infantil</h3><p>Cortes para niños en un ambiente tranquilo y amigable. Hasta 12 años.</p><span className="sp">$80</span></div>
        </div>
      </section>

      <section className="about" id="nosotros">
        <div className="ai">
          <div className="fu">
            <div className="aimg">
              <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop" alt="Barbería" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="fu">
            <span className="sl2">Sobre nosotros</span>
            <h2>Tradición y estilo desde 2015</h2>
            <p className="sd">Somos una barbería familiar con más de 10 años en Zapopan. Combinamos técnicas clásicas con tendencias modernas para darte el mejor resultado.</p>
            <ul className="fl">
              <li><span className="ck">✓</span>Barberos certificados con más de 8 años de experiencia</li>
              <li><span className="ck">✓</span>Productos premium: Uppercut, American Crew, Baxter</li>
              <li><span className="ck">✓</span>Ambiente relajado, música y buena vibra</li>
              <li><span className="ck">✓</span>Sistema de reserva online para no esperar</li>
            </ul>
            <div className="abs">
              <span className="ab">💈 Desde 2015</span><span className="ab">🏆 Premio local 2023</span>
              <span className="ab">📱 Reserva online</span><span className="ab">💳 Todas las formas de pago</span>
            </div>
          </div>
        </div>
      </section>

      <section className="apt" id="cita">
        <div className="sh fu" style={{ textAlign: 'center' }}>
          <span className="sl2">Reserva tu turno</span>
          <h2>Sin esperas, sin rollos</h2>
          <p className="sd" style={{ margin: '0 auto' }}>Elige tu servicio y día. Te confirmamos por WhatsApp.</p>
        </div>
        <div className="fw fu">
          <form onSubmit={handleForm}>
            <div className="fg">
              <div className="fgr"><label>Tu nombre</label><input type="text" placeholder="Ej. Carlos Hdz" required /></div>
              <div className="fgr"><label>WhatsApp</label><input type="tel" placeholder="33 1234 5678" required /></div>
              <div className="fgr">
                <label>Servicio</label>
                <select required defaultValue="">
                  <option value="" disabled>¿Qué te hacemos?</option>
                  <option>Corte Clásico $120</option>
                  <option>Afeitado con Navaja $150</option>
                  <option>Arreglo de Barba $100</option>
                  <option>Combo Completo $200</option>
                  <option>Tratamiento Capilar $180</option>
                  <option>Corte Infantil $80</option>
                </select>
              </div>
              <div className="fgr"><label>Fecha preferida</label><input type="date" min={today} required /></div>
              <div className="fgr full"><label>Algo que debamos saber</label><textarea placeholder="Tipo de corte, estilo de referencia, alergias a productos..."></textarea></div>
            </div>
            <button type="submit" className="sbtn" disabled={isSubmitting}>
              {isSubmitting ? '⏳ Reservando...' : '✂ Reservar mi turno'}
            </button>
          </form>
        </div>
      </section>

      <section className="tst" id="testimonios">
        <div className="sh fu">
          <span className="sl2">Lo que dicen</span>
          <h2>Clientes reales, resultados reales</h2>
          <p className="sd">+5,000 clientes satisfechos en Zapopan.</p>
        </div>
        <div className="tg">
          <div className="tc fu">
            <div className="stars">★★★★★</div>
            <p>"El mejor corte que me han hecho en Zapopan. El ambiente es increíble y el barbero sabe exactamente lo que quieres con solo describirlo."</p>
            <div className="ta">
              <div className="tav">
                <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=128&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div><div className="tn">Rodrigo Vargas</div><div className="tr">Andares, Zapopan</div></div>
            </div>
          </div>
          <div className="tc fu">
            <div className="stars">★★★★★</div>
            <p>"Reservé por la página en 2 minutos y llegué directo a mi turno. Sin esperar nada. El arreglo de barba quedó perfecto."</p>
            <div className="ta">
              <div className="tav">
                <img src="https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=128&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div><div className="tn">Miguel Ángel Ríos</div><div className="tr">Patria, Zapopan</div></div>
            </div>
          </div>
          <div className="tc fu">
            <div className="stars">★★★★★</div>
            <p>"Llevo a mi hijo de 7 años y es el único lugar donde no hace berrinche. Los chicos son muy pacientes con los niños."</p>
            <div className="ta">
              <div className="tav">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=128&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div><div className="tn">Laura Castillo</div><div className="tr">Providencia, GDL</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cnt" id="contacto">
        <div className="ci">
          <div className="fu">
            <span className="sl2">Encuéntranos</span>
            <h2>¿Dónde estamos?</h2>
            <p className="sd">En el corazón de Zapopan. Fácil acceso y estacionamiento.</p>
            <div className="ccs">
              <a href="tel:3312345678" className="cc"><div className="cic">📞</div><div><div className="clb">Teléfono</div><div className="cv">33 1234 5678</div></div></a>
              <a href="https://wa.me/5213312345678" className="cc"><div className="cic">💬</div><div><div className="clb">WhatsApp</div><div className="cv">Escríbenos directo</div></div></a>
              <div className="cc"><div className="cic">📍</div><div><div className="clb">Dirección</div><div className="cv">Av. Patria 890, Zapopan, Jalisco</div></div></div>
              <div className="cc"><div className="cic">🕐</div><div><div className="clb">Horario</div><div className="cv">Mar–Sáb 10am–8pm · Dom 10am–4pm</div></div></div>
            </div>
          </div>
          <div className="fu">
            <div className="mp">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Mapa" className="absolute inset-0 w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-4xl mb-2">📍</span>
                <span>Av. Patria 890, Zapopan</span>
                <a href="#">Ver en Google Maps →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © 2025 <strong>El Navajero — Barbería Premium</strong> · Zapopan, Jalisco<br/>
        Sitio web por <strong><a href="https://diegoperezc.vercel.app" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Diego Pérez</a></strong> 🚀
      </footer>

      <div className={`toast ${toastVisible ? 'show' : ''}`} id="toast">
        ✅ ¡Turno reservado! Te confirmamos por WhatsApp.
      </div>
    </>
  );
}
