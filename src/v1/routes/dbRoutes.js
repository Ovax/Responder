import * as dbSchema from '../../controllers/dataBase/dbSchema.js'
import * as dbHandler from '../../controllers/dataBase/dbHandler.js'
import * as dbService from '../../services/dbService.js'

const getDBRoutes	= async _ => {
	let finalRoutes = []
	
	const resources = await dbService.getResources()
	
	for(const resource of resources){
		const routes = await dbService.getRoutes(resource.resourceID)

		const echo = {
			url:		`/api/v1/${resource.resourceID}/echo`,
			method:		'GET',
			schema:		dbSchema.getEcho(resource.resourceID),
			handler:	dbHandler.getEcho,
		}
		finalRoutes.push(echo)
		
		routes.forEach( data => {
			
			const route = {
					url:		`/api/v1/${data.resourceID}/${data.routeID}`,
					method:		data.verb,
					schema:		dbSchema.getRoute(data.resourceID, data.statusCode, data.request),
					handler:	dbHandler.getRoute(data.resourceID, data.routeID, data.statusCode, data.request, data.delay),
			}
			finalRoutes.push(route)
		})
	}
	return finalRoutes
}

export default getDBRoutes
