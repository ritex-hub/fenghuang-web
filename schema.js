export default {
  name: 'paginaInicio',
  type: 'document',
  title: 'Administración Página Inicio',
  fields: [
    {
      name: 'tituloHero',
      type: 'string',
      title: 'Título Principal (Hero)',
    },
    {
      name: 'subtituloHero',
      type: 'text',
      title: 'Descripción Principal',
    },
    {
      name: 'whatsappTelefono',
      type: 'string',
      title: 'Número de WhatsApp (ej. 525524142002)',
    },
    {
      name: 'servicios',
      type: 'array',
      title: 'Lista de Servicios',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titulo', type: 'string', title: 'Nombre del Servicio' },
            { name: 'descripcion', type: 'text', title: 'Descripción del Servicio' },
            { name: 'imagen', type: 'image', title: 'Imagen del Servicio' }
          ]
        }
      ]
    }
  ]
}