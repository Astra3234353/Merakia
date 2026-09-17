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
  { name: "Estándar Instagram", subtitle: "Convierte mensajes en el siguiente paso.", price: "10,100", setup: "3,500", monthly: "550", originalPrice: null, tag: "TU ATENCIÓN EN INSTAGRAM", featured: false, features: ["Chatbot para Instagram", "Atención y preguntas frecuentes", "Información de tu negocio", "Conversaciones personalizadas", "Configuración y pruebas iniciales"], note: "Un canal para comenzar a automatizar tu atención.", topic: "el paquete Estándar Instagram", complete: null },
  { name: "Estándar WhatsApp", subtitle: "Tu atención, en el chat de todos los días.", price: "12,600", setup: "6,000", monthly: "550", originalPrice: null, tag: "TU ATENCIÓN EN WHATSAPP", featured: false, features: ["Chatbot para WhatsApp", "Atención y preguntas frecuentes", "Horarios e información del negocio", "Menú y reservaciones para restaurantes", "Configuración y pruebas iniciales"], note: "Empieza con la atención. Suma pedidos y CRM cuando lo necesites.", topic: "el paquete Estándar WhatsApp", complete: { extra: "6,000", annual: "18,600", originalAnnual: null, topic: "el paquete WhatsApp Completo con pedidos y CRM" } },
  { name: "Doble", subtitle: "Instagram y WhatsApp, trabajando para ti.", price: "14,800", setup: "6,800", monthly: "800", originalPrice: "16,400", tag: "DOS CANALES · PRECIO ESPECIAL", featured: true, features: ["Chatbot en Instagram y WhatsApp", "Atención y preguntas frecuentes", "Información personalizada del negocio", "Menú y reservaciones para restaurantes", "Configuración y pruebas en ambos canales"], note: "Ahorra $1,600 en el total del primer año del paquete Doble.", topic: "el paquete Doble con descuento", complete: { extra: "4,000", annual: "18,800", originalAnnual: "20,400", topic: "el paquete Doble Completo con pedidos y CRM" } },
];

const questions = [
  { q: "¿Qué necesito para empezar?", a: "Primero conocemos tu operación y definimos las funciones del bot. Para un restaurante, preparamos contigo la información del negocio, el menú, los horarios y las reglas de reservación o pedidos. Acordamos también los accesos, equipos e integraciones necesarios antes de implementar." },
  { q: "¿Cuánto tarda la implementación?", a: "La referencia de entrega es de 2 a 3 semanas, según el plan y el alcance acordado. Definimos contigo la fecha de operación y realizamos pruebas antes de activar el sistema." },
  { q: "¿Qué incluye la opción Completo con CRM?", a: "La opción Completo añade la gestión de pedidos y un CRM para organizar la información de tus clientes. Está disponible sobre WhatsApp y sobre el paquete Doble de Instagram y WhatsApp. Definimos contigo el flujo de pedidos, las integraciones y el alcance del CRM antes de implementar." },
  { q: "¿Los precios incluyen implementación y mensualidades?", a: "Sí. El costo del primer año mostrado incluye la implementación inicial y 12 mensualidades del servicio. También puedes ver el desglose de ambos conceptos en cada paquete. Todos los importes se presentan en MXN, sin IVA; las condiciones de pago se acuerdan en tu cotización." },
  { q: "¿Cómo funciona el descuento del paquete Doble?", a: "El paquete Doble pasa de $16,400 a $14,800 MXN para el primer año. El mismo descuento de $1,600 se aplica al Doble Completo con pedidos y CRM: pasa de $20,400 a $18,800 MXN. Los precios anteriores aparecen tachados para que puedas comparar. Todos estos importes son sin IVA." },
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
      <a className="wordmark" href="#" aria-label="Merakia, inicio"><span className="brand-symbol" aria-hidden="true">m<span>·</span></span>merakia<span className="wordmark-dot">*</span></a>
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
          <div className="visual-caption"><span>PERSONAS + TECNOLOGÍA</span><span>01 — 03</span></div>
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
          <article className="solution-card"><div className="solution-icon"><Stethoscope size={25}/></div><span className="card-kicker">PARA CONSULTORIOS</span><h3>La atención empieza<br/>antes de la consulta.</h3><p>Facilita las solicitudes de citas y las respuestas sobre horarios, ubicación y servicios de tu consultorio.</p><div className="service-chips"><span>Solicitudes de citas</span><span>Preguntas frecuentes</span></div><a className="card-link" href={whatsapp("una automatización a medida para mi consultorio")} target="_blank" rel="noopener noreferrer">Diseñemos tu solución <ArrowUpRight size={19}/></a></article>
          <article className="solution-card"><div className="solution-icon"><Workflow size={25}/></div><span className="card-kicker">PARA TU NEGOCIO</span><h3>Ese proceso que te quita<br/>tiempo tiene solución.</h3><p>Conectamos las preguntas de tus clientes con el siguiente paso. Construimos el flujo que tu operación necesita.</p><div className="service-chips"><span>Chatbots con IA</span><span>Flujos a medida</span></div><a className="card-link" href={whatsapp("un chatbot y flujos personalizados para mi negocio")} target="_blank" rel="noopener noreferrer">Cuéntanos tu idea <ArrowUpRight size={19}/></a></article>
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
        <div className="process-foot"><CalendarDays size={18}/><span>Implementación estimada: <strong>2 a 3 semanas</strong>, según el plan y el alcance.</span><a href={whatsapp("cómo comenzar con la automatización de mi negocio")} target="_blank" rel="noopener noreferrer">Empecemos por una conversación <ArrowUpRight size={16}/></a></div>
      </div></section>

      <section className="plans section-wrap section-space" id="planes" aria-labelledby="plans-title">
        <div className="center-heading"><div className="eyebrow">03 / PAQUETES DE AUTOMATIZACIÓN</div><h2 id="plans-title">Elige tu canal.<br/><em>Nosotros conectamos lo demás.</em></h2><p>Instagram, WhatsApp o ambos. Suma pedidos y CRM con la opción Completo.</p><span className="pricing-tax-label">Todos los precios en MXN, sin IVA.</span></div>
        <div className="plans-grid">{plans.map(plan => <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}><div className="plan-main">
          <span className="plan-tag">{plan.featured && <Sparkles size={14}/>} {plan.tag}</span><h3>{plan.name}</h3><p className="plan-subtitle">{plan.subtitle}</p>
          <div className="discount-line">{plan.originalPrice && <><span>Antes <del>${plan.originalPrice}</del></span><span className="discount-badge">Ahorras $1,600</span></>}</div>
          <div className="plan-price"><span>$</span>{plan.price}<small>MXN</small></div><span className="price-label">Costo del primer año{plan.originalPrice ? " · con descuento" : ""}</span>
          <dl className="price-breakdown"><div><dt>Implementación{plan.originalPrice ? " base" : ""}</dt><dd>${plan.setup} <small>MXN</small></dd></div><div><dt>Servicio mensual</dt><dd>${plan.monthly} <small>MXN / mes</small></dd></div>{plan.originalPrice && <div className="discount-breakdown"><dt>Descuento sobre el primer año</dt><dd>−$1,600</dd></div>}</dl>
          <ul>{plan.features.map(feature => <li key={feature}><Check size={16}/><span>{feature}</span></li>)}</ul><div className="plan-bottom"><p className="plan-note">{plan.note}</p><a className={`button ${plan.featured ? "button-cream" : "button-outline"}`} href={whatsapp(plan.topic)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar paquete ${plan.name}`}>Me interesa este paquete <ArrowUpRight size={18}/></a></div>
          </div>{plan.complete && <div className="complete-option"><span className="complete-label"><Sparkles size={15}/> PEDIDOS + CRM</span><h4>Completo con CRM</h4><p>Agrega pedidos automatizados y organiza la información de tus clientes.</p><div className="complete-addon">+${plan.complete.extra} <span>MXN de implementación</span></div><div className="complete-total"><span>Total del primer año{plan.complete.originalAnnual && <del>Antes ${plan.complete.originalAnnual}</del>}</span><strong>${plan.complete.annual} <small>MXN</small></strong></div><a className="complete-link" href={whatsapp(plan.complete.topic)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar ${plan.name === "Doble" ? "Doble" : "WhatsApp"} Completo con CRM`}>Quiero la opción Completo <ArrowUpRight size={17}/></a></div>}
        </article>)}</div>
        <p className="pricing-disclaimer">El total del primer año contempla implementación y 12 mensualidades. Las versiones Doble y Doble Completo ya incluyen un descuento de $1,600 sobre su total regular. Precios en MXN, sin IVA. Alcance y condiciones de pago sujetos a cotización.</p>
        <div className="custom-plan"><div><strong>¿Tienes un consultorio u otro tipo de negocio?</strong><p>Tu solución merece su propio plan. La diseñamos contigo.</p></div><a className="text-link" href={whatsapp("una cotización personalizada para mi negocio")} target="_blank" rel="noopener noreferrer">Solicitar una propuesta <ArrowUpRight size={18}/></a></div>
      </section>

      <section className="faq-section section-wrap" id="preguntas" aria-labelledby="faq-title"><div className="faq-intro"><div className="eyebrow">04 / CON TODA CLARIDAD</div><h2 id="faq-title">Buenas preguntas.<br/><em>Respuestas claras.</em></h2><p>Y si tienes otra en mente,<br/>nos encantará escucharte.</p><a className="text-link" href={whatsapp("una duda sobre sus servicios")} target="_blank" rel="noopener noreferrer">Escríbenos <ArrowUpRight size={17}/></a></div><div className="faq-list">{questions.map(item => <details key={item.q}><summary>{item.q}<Plus size={19}/></summary><p>{item.a}</p></details>)}</div></section>

      <section className="contact-section" id="contacto"><div className="contact-inner section-wrap"><div className="eyebrow"><span className="tiny-spark">✳</span> EL SIGUIENTE PASO ES MÁS SIMPLE</div><h2>Haz espacio para<br/><em>lo que viene.</em></h2><p>Cuéntanos qué te gustaría dejar de hacer manualmente.<br/>Juntos encontramos por dónde empezar.</p><a className="button button-cream" href={whatsapp()} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> Hablemos de tu negocio <ArrowUpRight size={20}/></a><span className="contact-phone">WhatsApp · +52 462 491 8864</span></div><span className="contact-asterisk" aria-hidden="true">✳</span></section>
      <footer className="footer section-wrap"><a className="wordmark" href="#" aria-label="Merakia, volver al inicio"><span className="brand-symbol" aria-hidden="true">m<span>·</span></span>merakia<span className="wordmark-dot">*</span></a><p>Tecnología con intención. Tiempo para lo tuyo.</p><span>© 2026 Merakia</span><a href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Merakia por WhatsApp"><MessageCircle size={21}/></a></footer>
    </main>
  </>;
}
