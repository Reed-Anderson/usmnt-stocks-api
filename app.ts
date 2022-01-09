import express from "express"
import { connectRoutes } from "./misc/routes"

const app = express()
const port = process.env.port || 3000

connectRoutes( app )

app.listen( port, () => {
	console.log( `Listening at http://localhost:${port}` )
} )
