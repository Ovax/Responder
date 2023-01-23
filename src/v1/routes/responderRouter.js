import * as responderHandler from '../../controllers/responder/responderHandler.js'
import * as respoderSchema from '../../controllers/responder/responderSchema.js'

const baseURL = '/api/v1/responder'

export default [
		{
				url: `${baseURL}/:resourceID/:routeID`,
				method: 'GET',
				schema: respoderSchema.responderGET,
				handler: responderHandler.responderGET
		},
		{
				url: `${baseURL}`,
				method: 'POST',
				schema: respoderSchema.responderPOST,
				handler: responderHandler.responderPOST
		},
		{
				url: `${baseURL}/:resourceID`,
				method: 'DELETE',
				schema: respoderSchema.responderResourceDELETE,
				handler: responderHandler.responderResourceDELETE
		},
		{
				url: `${baseURL}/:resourceID`,
				method: 'PUT',
				schema: respoderSchema.responderPUT,
				handler: responderHandler.responderPUT
		},
		{
				url: `${baseURL}/:resourceID/:routeID`,
				method: 'DELETE',
				schema: respoderSchema.responderRouteDELETE,
				handler: responderHandler.responderRouteDELETE
		},
		{
				url: `${baseURL}`,
				method: 'PATCH',
				schema: respoderSchema.responderPATCH,
				handler: responderHandler.responderPATCH
		},
]
