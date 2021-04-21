import React from 'react';
import { IoIosGitNetwork } from "react-icons/io";
import { AiOutlineCluster , AiOutlineTeam , AiOutlineReconciliation } from 'react-icons/ai';

interface IConfig {
  icon : JSX.Element,
  title : string;
  text : string;
}

const config : IConfig[] = [
  {
    icon : <AiOutlineCluster size={64} />,
    title : "Sistemas de Gestión",
    text : "Establecimiento e implementación de Sistemas de Gestión",
  },
  {
    icon : <AiOutlineTeam size={64} />,
    title : "Capacitacion del Personal",
    text : "Planificación y realización de charlas \"in house\", para personal de empresas diversas.",
  },
  {
    icon : <IoIosGitNetwork size={64} />,
    title : "Proyectos de Infraestructura",
    text : "Elaboración de planes de seguridad y salud en el trabajo, planes de gestión ambiental, planes de respuesta ante emergencia, etc.",
  },
  {
    icon : <AiOutlineReconciliation size={64} />,
    title : "Otros Servicios",
    text : "Servicio tercerizado de reclutamiento y selección de personal para los sectores de ingeniería, Construcción, Proyectos y afines.",
  },
] 

export default config;