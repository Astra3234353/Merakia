"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight, MessageCircle, Sparkles, Check, CheckCheck, Utensils, CalendarDays, Menu, X, Stethoscope, Workflow, Play, Plus, QrCode, CreditCard, ClipboardList } from "lucide-react";

const whatsapp = (topic = "automatizar mi negocio") => `https://wa.me/524624918864?text=${encodeURIComponent(`Hola, Merakia. Me gustaría conocer más sobre ${topic}.`)}`;
const scenarios = [
  { label: "Restaurante", icon: Utensils, name: "Tu restaurante", request: "¡Hola! ¿Puedo reservar una mesa para 4?", response: "¡Claro! Será un gusto recibirte. ¿Qué día y a qué hora te gustaría venir?", reply: "Este viernes a las 8:00 pm", result: "Reservación confirmada", detail: "Viernes · 8:00 pm · 4 personas" },
  { label: "Consultorio", icon: Stethoscope, name: "Tu consultorio", request: "Hola, quisiera agendar una consulta.", response: "Con gusto. Puedo ayudarte a consultar horarios y solicitar tu cita. ¿Prefieres mañana o tarde?", reply: "Por la tarde, por favor", result: "Solicitud de cita registrada", detail: "Turno de tarde · Por confirmar" },
  { label: "Tu negocio", icon: Workflow, name: "Tu negocio", request: "¡Hola! Me interesa conocer sus servicios.", response: "¡Hola! Cuéntame qué necesitas y te ayudo a encontrar la opción adecuada para ti.", reply: "Quiero una cotización personalizada", result: "Consulta enviada a tu equipo", detail: "Información organizada · Lista para atender" },
];

const plans = [
  { name: "Starter", subtitle: "Atención, menú y reservaciones en Instagram.", price: "11,100", setup: "4,500", monthly: "550", tag: "TU ATENCIÓN EN INSTAGRAM", featured: false, features: ["Chatbot para Instagram", "Atención y preguntas frecuentes", "Horarios, ubicación e información", "Menú digital y reservaciones", "QR del menú sin costo adicional", "Configuración y pruebas iniciales"], note: "Un canal para comenzar a automatizar tu atención.", topic: "el plan Starter para Instagram", complete: null },
  { name: "Básico", subtitle: "Atención, menú y reservaciones en WhatsApp.", price: "12,600", setup: "6,000", monthly: "550", tag: "TU ATENCIÓN EN WHATSAPP", featured: false, features: ["Chatbot para WhatsApp", "Atención y preguntas frecuentes", "Horarios, ubicación e información", "Menú digital y reservaciones", "QR del menú sin costo adicional", "Configuración y pruebas iniciales"], note: "Empieza con la atención. Suma pedidos, cobros y CRM con Completo.", topic: "el plan Básico para WhatsApp", complete: { name: "Completo", extra: "6,000", setup: "12,000", monthly: "800", annual: "21,600", topic: "el plan Completo de WhatsApp con pedidos, cobros y CRM" } },
  { name: "Double", subtitle: "Instagram y WhatsApp, trabajando para ti.", price: "16,400", setup: "6,800", monthly: "800", tag: "DOS CANALES CONECTADOS", featured: true, features: ["Chatbot en Instagram y WhatsApp", "Atención y preguntas frecuentes", "Información de tu negocio", "Envío del menú digital", "Gestión de reservaciones", "Configuración en ambas plataformas"], note: "Atención automatizada en los dos canales de tu negocio.", topic: "el plan Double de Instagram y WhatsApp", complete: { name: "Completo Double", extra: "4,000", setup: "10,800", monthly: "800", annual: "20,400", topic: "el plan Completo Double con pedidos, cobros y CRM" } },
];

const questions = [
  { q: "¿Qué necesito para empezar?", a: "Primero conocemos tu operación y definimos las funciones del bot. Para un restaurante, preparamos contigo la información del negocio, el menú, los horarios y las reglas de reservación o pedidos. Acordamos también los accesos, equipos e integraciones necesarios antes de implementar." },
  { q: "¿Cuánto tarda la implementación?", a: "La referencia de entrega es de 3 a 4 semanas, según el plan y el alcance acordado. Definimos contigo la fecha de operación y realizamos pruebas antes de activar el sistema." },
  { q: "¿Qué incluye la opción Completo con CRM?", a: "La opción Completo añade la gestión de pedidos y un CRM para organizar la información de tus clientes. Está disponible sobre WhatsApp y sobre el paquete Doble de Instagram y WhatsApp. Definimos contigo el flujo de pedidos, las integraciones y el alcance del CRM antes de implementar." },
  { q: "¿Los precios incluyen implementación y mensualidades?", a: "Sí. El costo del primer año mostrado incluye la implementación inicial y 12 mensualidades del servicio. También puedes ver el desglose de ambos conceptos en cada paquete. Todos los importes se presentan en MXN, sin IVA; las condiciones de pago se acuerdan en tu cotización." },
  { q: "¿La mensualidad cambia con el plan Completo?", a: "Sí. El plan Básico de WhatsApp tiene una mensualidad de $550 MXN; al elegir Completo, la mensualidad es de $800 MXN. Double y Completo Double tienen una mensualidad de $800 MXN. Todos los precios son sin IVA." },
  { q: "¿Puedo agregar funciones después?", a: "Sí. Los ajustes necesarios para cumplir el alcance acordado están incluidos en la implementación inicial. Las nuevas funciones o cambios posteriores fuera de ese alcance se cotizan por separado, con un precio base de $1,200 MXN que depende de la complejidad." },
  { q: "¿También trabajan con doctores y otros negocios?", a: "Sí. Diseñamos chatbots y automatizaciones a medida para consultorios y otros negocios. Podemos definir contigo la atención de preguntas frecuentes y las solicitudes de citas o información. Los planes publicados corresponden a restaurantes; el alcance y precio de otros sectores se cotizan por separado." },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const scenario = scenarios[active];
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <header className="site-header" onKeyDown={event => { if (event.key === "Escape") setMenuOpen(false); }}>
      <a className="wordmark brand-logo" href="#" aria-label="Merakia, inicio"><img src="/merakia-logo.png" alt="Merakia" width="1448" height="1086"/></a>
      <nav className={menuOpen ? "navigation is-open" : "navigation"} aria-label="Navegación principal">
        <a href="#soluciones" onClick={() => setMenuOpen(false)}>Soluciones</a>
        <a href="#proceso" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
        <a href="#planes" onClick={() => setMenuOpen(false)}>Planes</a>
        <a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas frecuentes</a>
      </nav>
      <a className="button button-small header-cta" href={whatsapp()} target="_blank" rel="noopener noreferrer">Hablemos <ArrowUpRight size={17}/></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    <main id="contenido">
      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="tiny-spark">✳</span> AUTOMATIZACIÓN CON INTENCIÓN</div>
          <h1 id="hero-title">Menos tareas.<br/>Más tiempo<br/><em>para lo tuyo.</em></h1>
          <p>Tu negocio tiene mucho que ofrecer. Creamos chatbots con IA que atienden, reservan y toman pedidos, para que tú te enfoques en hacerlo crecer.</p>
          <div className="hero-actions"><a className="button" href={whatsapp()} target="_blank" rel="noopener noreferrer">Hablemos de tu negocio <ArrowUpRight size={19}/></a><a className="text-link" href="#demo"><span className="play-circle"><Play size={12} fill="currentColor"/></span> Míralo en acción</a></div>
          <div className="hero-note"><Check size={15}/> Hecho a la medida de tu negocio <span>·</span> Atención con tu esencia</div>
        </div>
        <div className="hero-visual" id="demo">
          <div className="visual-caption"><span>PERSONAS + TECNOLOGÍA</span></div>
          <img className="hero-art has-image" src="/merakia-loop.webp" alt="" width="1100" height="1100" fetchPriority="high" aria-hidden="true"/>
          <div className="automation-tag"><Sparkles size={18}/><span>Tu tiempo, de vuelta.</span></div>
          <div className="chat-card">
            <div className="chat-header"><div className="chat-avatar"><scenario.icon size={21}/></div><div><strong>{scenario.name}</strong><span>Asistente de Merakia</span></div><MessageCircle size={21}/></div>
            <div className="chat-body" key={active}><span className="chat-date">Ejemplo de conversación</span><div className="bubble bubble-user">{scenario.request}<span>10:24 <CheckCheck size={12}/></span></div><div className="bubble bubble-bot">{scenario.response}<span>10:24</span></div><div className="bubble bubble-user">{scenario.reply}<span>10:25 <CheckCheck size={12}/></span></div><div className="chat-result"><div className="result-check"><Check size={16}/></div><div><strong>{scenario.result}</strong><span>{scenario.detail}</span></div></div></div>
            <div className="chat-footer"><Sparkles size={13}/> Una conversación. Una tarea resuelta.</div>
          </div>
          <div className="scenario-tabs" aria-label="Ejemplo por tipo de negocio">{scenarios.map((s,i) => <button key={s.label} onClick={() => setActive(i)} aria-pressed={active===i} className={active===i ? "selected" : ""}><s.icon size={14}/>{s.label}</button>)}</div>
        </div>
      </section>
      <div className="benefit-strip"><span><MessageCircle/>Conversaciones que avanzan</span><span><CalendarDays/>Reservaciones organizadas</span><span><Utensils/>Pedidos sin transcribir</span><span><Sparkles/>Más espacio para crecer</span></div>

      <section className="solutions section-wrap section-space" id="soluciones" aria-labelledby="solutions-title">
        <div className="section-heading"><div><div className="eyebrow">01 / SOLUCIONES CON PROPÓSITO</div><h2 id="solutions-title">Tu negocio es único.<br/><em>Tu automatización también.</em></h2></div><p>Nos encargamos de lo repetitivo sin perder lo que hace especial a tu atención. Tú pones la esencia. Nosotros, la tecnología.</p></div>
        <div className="solution-grid">
          <article className="solution-card restaurant-card"><div className="solution-icon"><Utensils size={25}/></div><span className="card-kicker">PARA RESTAURANTES</span><h3>Más mesas atendidas.<br/>Menos mensajes pendientes.</h3><p>Del menú a la reservación, del pedido al cobro. Dale orden a las conversaciones de tu restaurante.</p><div className="mini-flow" aria-label="Flujo de atención para restaurantes"><span><QrCode size={18}/>Menú</span><ArrowRight size={14}/><span><ClipboardList size={18}/>Pedido</span><ArrowRight size={14}/><span><CreditCard size={18}/>Pago</span></div><a className="card-link" href="#planes">Explora los planes <ArrowUpRight size={19}/></a></article>
          <article className="solution-card"><div className="solution-icon"><Stethoscope size={25}/></div><span className="card-kicker">PARA CONSULTORIOS</span><h3>La atención empieza <br/>antes de la consulta.</h3><p>Facilita las solicitudes de citas y las respuestas sobre horarios, ubicación y servicios de tu consultorio.</p><div className="service-chips"><span>Solicitudes de citas</span><span>Preguntas frecuentes</span></div><a className="card-link" href={whatsapp("una automatización a medida para mi consultorio")} target="_blank" rel="noopener noreferrer">Diseñemos tu solución <ArrowUpRight size={19}/></a></article>
          <article className="solution-card"><div className="solution-icon"><Workflow size={25}/></div><span className="card-kicker">PARA TU NEGOCIO</span><h3>Ese proceso que te quita <br/>tiempo tiene solución.</h3><p>Conectamos las preguntas de tus clientes con el siguiente paso. Construimos el flujo que tu operación necesita.</p><div className="service-chips"><span>Chatbots con IA</span><span>Flujos a medida</span></div><a className="card-link" href={whatsapp("un chatbot y flujos personalizados para mi negocio")} target="_blank" rel="noopener noreferrer">Cuéntanos tu idea <ArrowUpRight size={19}/></a></article>
        </div>
        <div className="human-note"><Sparkles size={20}/><p>Automatizar también es cuidar: <strong>el tiempo de tu equipo y la experiencia de tus clientes.</strong></p></div>
      </section>

      <section className="process-section" id="proceso" aria-labelledby="process-title"><div className="section-wrap section-space">
        <div className="section-heading"><div><div className="eyebrow">02 / ASÍ LO HACEMOS</div><h2 id="process-title">De tu idea a un flujo<br/><em>que trabaja contigo.</em></h2></div><p>Te acompañamos desde la primera conversación hasta las pruebas de tu bot. Sin pedirte que seas experto en tecnología.</p></div>
        <div className="process-grid">
          <article><span className="step-number">01</span><h3>Entendemos tu día a día.</h3><p>Conocemos tu negocio, identificamos las tareas que puedes automatizar y acordamos un alcance claro.</p></article>
          <article><span className="step-number">02</span><h3>Lo hacemos a tu manera.</h3><p>Configuramos las conversaciones, la información y las funciones para que el bot responda como tu negocio necesita.</p></article>
          <article><span className="step-number">03</span><h3>Probamos. Ajustamos. Activamos.</h3><p>Revisamos el flujo completo contigo y realizamos los ajustes del alcance acordado antes de ponerlo en operación.</p></article>
        </div>
        <div className="process-foot"><CalendarDays size={18}/><span>Implementación estimada: <strong>3 a 4 semanas</strong>, según el plan y el alcance.</span><a href={whatsapp("cómo comenzar con la automatización de mi negocio")} target="_blank" rel="noopener noreferrer">Empecemos por una conversación <ArrowUpRight size={16}/></a></div>
      </div></section>

      <section className="plans section-wrap section-space" id="planes" aria-labelledby="plans-title">
        <div className="center-heading"><div className="eyebrow">03 / PAQUETES DE AUTOMATIZACIÓN</div><h2 id="plans-title">Elige tu canal.<br/><em>Nosotros conectamos lo demás.</em></h2><p>Instagram, WhatsApp o ambos. Suma pedidos y CRM con la opción Completo.</p><span className="pricing-tax-label">Todos los precios en MXN, sin IVA.</span></div>
        <div className="plans-grid">{plans.map(plan => <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}><div className="plan-main">
          <span className="plan-tag">{plan.featured && <Sparkles size={14}/>} {plan.tag}</span><h3>{plan.name}</h3><p className="plan-subtitle">{plan.subtitle}</p>
          <div className="plan-price"><span>$</span>{plan.price}<small>MXN</small></div><span className="price-label">Costo del primer año · sin IVA</span>
          <dl className="price-breakdown"><div><dt>Implementación</dt><dd>${plan.setup} <small>MXN</small></dd></div><div><dt>Servicio mensual</dt><dd>${plan.monthly} <small>MXN / mes</small></dd></div></dl>
          <ul>{plan.features.map(feature => <li key={feature}><Check size={16}/><span>{feature}</span></li>)}</ul><div className="plan-bottom"><p className="plan-note">{plan.note}</p><a className={`button ${plan.featured ? "button-cream" : "button-outline"}`} href={whatsapp(plan.topic)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar paquete ${plan.name}`}>Me interesa este paquete <ArrowUpRight size={18}/></a></div>
          </div>{plan.complete && <div className="complete-option"><span className="complete-label"><Sparkles size={15}/> PEDIDOS + COBROS + CRM</span><h4>{plan.complete.name}</h4><p>Agrega pedidos, cobros automatizados y CRM para organizar la información de tus clientes.</p><div className="complete-addon">+${plan.complete.extra} <span>MXN de implementación por el módulo</span></div><dl className="price-breakdown complete-breakdown"><div><dt>Implementación total</dt><dd>${plan.complete.setup} <small>MXN</small></dd></div><div><dt>Servicio mensual</dt><dd>${plan.complete.monthly} <small>MXN / mes</small></dd></div></dl><div className="complete-total"><span>Total del primer año<small className="tax-note">Precios sin IVA</small></span><strong>${plan.complete.annual} <small>MXN</small></strong></div><a className="complete-link" href={whatsapp(plan.complete.topic)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar plan ${plan.complete.name} con CRM`}>Quiero la opción Completo <ArrowUpRight size={17}/></a></div>}
        </article>)}</div>
        <p className="pricing-disclaimer">Precios en MXN, sin IVA. El total del primer año contempla implementación y 12 mensualidades del plan seleccionado. Alcance, integraciones y condiciones de pago sujetos a cotización.</p>
        <div className="custom-plan"><div><strong>¿Tienes un consultorio u otro tipo de negocio?</strong><p>Tu solución merece su propio plan. La diseñamos contigo.</p></div><a className="text-link" href={whatsapp("una cotización personalizada para mi negocio")} target="_blank" rel="noopener noreferrer">Solicitar una propuesta <ArrowUpRight size={18}/></a></div>
      </section>

      <section className="faq-section section-wrap" id="preguntas" aria-labelledby="faq-title"><div className="faq-intro"><div className="eyebrow">04 / CON TODA CLARIDAD</div><h2 id="faq-title">Buenas preguntas.<br/><em>Respuestas claras.</em></h2><p>Y si tienes otra en mente,<br/>nos encantará escucharte.</p><a className="text-link" href={whatsapp("una duda sobre sus servicios")} target="_blank" rel="noopener noreferrer">Escríbenos <ArrowUpRight size={17}/></a></div><div className="faq-list">{questions.map(item => <details key={item.q}><summary>{item.q}<Plus size={19}/></summary><p>{item.a}</p></details>)}</div></section>

      <section className="contact-section" id="contacto"><div className="contact-inner section-wrap"><div className="eyebrow"><span className="tiny-spark">✳</span> EL SIGUIENTE PASO ES MÁS SIMPLE</div><h2>Haz espacio para<br/><em>lo que viene.</em></h2><p>Cuéntanos qué te gustaría dejar de hacer manualmente.<br/>Juntos encontramos por dónde empezar.</p><a className="button button-cream" href={whatsapp()} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> Hablemos de tu negocio <ArrowUpRight size={20}/></a><span className="contact-phone">WhatsApp · +52 462 491 8864</span></div><span className="contact-asterisk" aria-hidden="true">✳</span></section>
      <footer className="footer section-wrap"><a className="wordmark brand-logo" href="#" aria-label="Merakia, volver al inicio"><img src="/merakia-logo.png" alt="Merakia" width="1448" height="1086" loading="lazy"/></a><p>Tecnología con intención. Tiempo para lo tuyo.</p><span>© 2026 Merakia</span><a href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Merakia por WhatsApp"><MessageCircle size={21}/></a></footer>
    </main>
  </>;
}
