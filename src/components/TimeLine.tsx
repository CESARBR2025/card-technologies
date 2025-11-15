export const TimeLine = () => {
  return (
    <section className=" p-8">
      <ol className="relative border-s border-default border-gray-500">
        <li className="mb-10 ms-6 ">
          <span
            className="absolute  bg-blue-500/30  flex items-center justify-center 
          w-6 h-6 bg-brand-softer rounded-full -start-3 ring-8 ring-sky-800/40"
          >
            <svg
              className="w-3 h-3 text-fg-brand-strong   stroke-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
            </svg>
          </span>
          <time className="bg-gray-500/30 border border-white/30 text-white text-heading text-xs font-medium px-1.5 py-0.5 rounded-lg">
            Oct 15 2024 - Jul 25, 2025
          </time>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-heading my-2 text-white">
            Full Stack Data Developer - IMBERA Solkos{" "}
            <span className="ms-2 bg-brand-softer border border-blue-400/60 bg-blue-500/30 text-blue-300  text-xs font-medium px-1.5 py-0.5 rounded-lg">
              Ultimo
            </span>
          </h3>
          <p className="mb-4 text-body text-gray-400">
            Reemplacé la dependencia de Tableau con soluciones internas
            personalizadas; desarrollé dashboards para la medición estratégica
            de KPIs e implementé APIs para optimizar el consumo y distribución
            de información.
          </p>
        </li>

        <li className="mb-10 ms-6 ">
          <span
            className="absolute  bg-blue-500/30  flex items-center justify-center 
          w-6 h-6 bg-brand-softer rounded-full -start-3 ring-8 ring-sky-800/40"
          >
            <svg
              className="w-3 h-3 text-fg-brand-strong   stroke-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
            </svg>
          </span>
          <time className="bg-gray-500/30 border border-white/30 text-white text-heading text-xs font-medium px-1.5 py-0.5 rounded-lg">
            Ago 04, 2024 - Octubre 12, 2024
          </time>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-heading my-2 text-white">
            Ingeriero de Infraestructura TI
            <span className="ms-2 bg-brand-softer border border-blue-400/60 bg-blue-500/30 text-blue-300  text-xs font-medium px-1.5 py-0.5 rounded-lg">
              3 meses
            </span>
          </h3>
          <p className="mb-4 text-body text-gray-400">
            Gestioné la infraestructura de red corporativa mediante la
            configuración y administración de dispositivos Cisco (routers,
            switches y firewalls). Implementé protocolos de enrutamiento (OSPF,
            EIGRP) y segmentación mediante VLAN, asegurando redes escalables,
            seguras y de alto rendimiento.
          </p>
        </li>

        <li className="mb-10 ms-6 ">
          <span
            className="absolute  bg-blue-500/30  flex items-center justify-center 
          w-6 h-6 bg-brand-softer rounded-full -start-3 ring-8 ring-sky-800/40"
          >
            <svg
              className="w-3 h-3 text-fg-brand-strong   stroke-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
            </svg>
          </span>
          <time className="bg-gray-500/30 border border-white/30 text-white text-heading text-xs font-medium px-1.5 py-0.5 rounded-lg">
            Ene 18, 2020 - Ago 20, 2024
          </time>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-heading my-2 text-white">
            Técnico en Soporte e Infraestructura TI{" "}
            <span className="ms-2 bg-brand-softer border border-blue-400/60 bg-blue-500/30 text-blue-300  text-xs font-medium px-1.5 py-0.5 rounded-lg">
              +4 años
            </span>
          </h3>
          <p className="mb-4 text-body text-gray-400">
            Administré redes Cisco para múltiples negocios, configurando
            switches, routers y firewalls, y gestionando infraestructura
            LAN/WAN. Brindé soporte remoto vía helpdesk, así como soporte
            técnico en hardware y software a equipos informáticos.
          </p>
        </li>
      </ol>
      ;
    </section>
  );
};
