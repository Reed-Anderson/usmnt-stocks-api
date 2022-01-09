import dotenv from "dotenv"
import sql from "mssql"

/* Configure environment variables */
dotenv.config()

/* Configure database connection */
const sqlConfig = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	server: process.env.DB_SERVER,
	database: process.env.DB_NAME,
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000
	},
	options: {
		encrypt: true,
		trustServerCertificate: false
	}
}

/* Connect to SQL once */
const connection = sql.connect( sqlConfig )

/* Export function to use sql connection on demand */
export const getConnection = async () => await connection
