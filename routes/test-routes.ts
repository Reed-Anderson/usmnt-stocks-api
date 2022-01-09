import express from "express"
import { getConnection } from "../misc/sql-connection"

/*******************************************************************************
 *
 * Simple routes used for testing purposes.
 *
 ******************************************************************************/

export const testRouter = express.Router()

/**
 * Hello world
 */
testRouter.get( "/", ( req, res ) => {
	res.send( "Hello World!" )
} )

/**
 * Execute get_dividend_triggers Stored Procedure
 */
testRouter.get( "/db", async ( req, res ) => {
	const connectionPool = await getConnection()
	const response = await connectionPool
		.request()
		.execute( "dbo.get_dividend_triggers" )
	res.send( response )
} )
