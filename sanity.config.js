import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { assist } from '@sanity/assist' // Extensión para Asistente de IA
import schemaTypes from './schema'

export default defineConfig({
  name: 'fenghuang-cms',
  title: 'Panel FENGHUANG',
  projectId: 'w37xypzn', // Se genera en el paso de registro
  dataset: 'production',

  plugins: [
    deskTool(),
    assist() // Activa el botón con IA para redactar/modificar textos
  ],

  schema: {
    types: [schemaTypes],
  },
})
