'use strict'

const Glue = require('@hapi/glue')
const Manifest = require('./config/manifest.config')

const composeOptions = {
  relativeTo: __dirname
}

const startServer = async () => {
  try {
    const manifest = Manifest.get('/')
    const server = await Glue.compose(
      manifest,
      composeOptions
    )

    await server.start()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

startServer()
