
const getEcho		= endpoint => {
	const schema = {
		summary: 'Echo method',
		tags: [endpoint],
		response: {
		  200: {
			description: 'Succesful response',
			type: 'object',
			properties: {
				url:		{ type: 'string' },
				method:		{ type: 'string' },
				headers:	{ type: "array", items: { type: "string" } },
			},
		  }
		}
	}

	return schema
}

const getRoute = (resourceID, statusCode, request) => {
    let response = {}

    response[statusCode] = {
        type: 'object',
        additionalProperties: true,
        example: JSON.parse(request),
      }

    const schema = {
        tags: [resourceID],
        response,
    }
    
	return schema
}

export {
    getEcho,
    getRoute,
}
