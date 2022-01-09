import { Express } from "express"
import { testRouter } from "../routes/test-routes"

/*******************************************************************************
 *
 * Connect all routes to the app
 *
 ******************************************************************************/

export const connectRoutes = ( app: Express ) => {
	app.use( "/", testRouter )
}
