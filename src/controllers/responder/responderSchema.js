const tags = ['Responder']

const responderGET = {
  summary: 'Get messajes',
  description: 'Get messajes stored',
  tags,
  params: {
    type: 'object',
    properties: {
      resourceID: {
        type: 'string',
        description: 'the resource identifier, as resourceID'
      },
      routeID: {
        type: 'string',
        description: 'the resource identifier, as resource'
      }
    },
    required: [ 'resourceID', 'routeID' ]
  },
  querystring: {
    type: 'object',
    additionalProperties: false,
    properties: {
      page: {
        type: 'integer',
      }
    }
  },
  response: {
    200: {
      description: 'Succesful response',
      type: 'object',
      additionalProperties: true,
    }
  }
}

const responderPOST = {
    summary: 'Create a new resource',
    description: 'Create a new resource',
    tags,
    body: {
      type: 'object',
      properties: {
        name:         { type: 'string' },
      }
    },
    response: {
      200: {
        description: 'Succesful response',
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
}

const responderPUT = {
    summary: 'Create or Update one route',
    description: 'Create or Update one route',
    tags,
    params: {
      type: 'object',
      properties: {
        resourceID: {
          type: 'string',
          description: 'the route identifier, as resourceID'
        }
      },
      required: ['resourceID']
    },
    body: {
      type: 'object',
      properties: {
        name:         { type: 'string' },
        statusCode:	  { type: 'integer', minimum: 100, maximum: 599, default: 200 },
        request:	    { type: 'object' },
        delay:	      { type: 'integer' },
        verb:         { type: 'string', enum: ['GET', 'POST', 'PUT', 'DELETE'] },
      }
    },
    response: {
      200: {
        description: 'Succesful response',
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
}

const responderPATCH = {
    summary: 'Restart server',
    description: 'You need it to be able to see the changes',
    tags,
    response: {
      200: {
        description: 'Succesful response',
        type: 'object',
      }
    }
}

const responderResourceDELETE = {
    summary: 'Delete a resource with all routes',
    description: '',
    tags,
    params: {
      type: 'object',
      properties: {
        resourceID: {
          type: 'string',
          description: 'the resource identifier, as resourceID'
        }
      },
      required: ['resourceID']
    },
    response: {
      200: {
        description: 'Succesful response',
        type: 'object',
      }
    }
}

const responderRouteDELETE = {
    summary: 'Delete an Route',
    description: '',
    tags,
    params: {
      type: 'object',
      properties: {
        resourceID: {
          type: 'string',
          description: 'the route identifier, as routeID'
        },
        routeID: {
          type: 'string',
          description: 'the route identifier, as routeID'
        }
      },
      required: ['routeID']
    },
    response: {
      200: {
        description: 'Succesful response',
        type: 'object',
      }
    }
}

export {
  responderGET,
  responderPOST,
  responderPUT,
  responderPATCH,
  responderResourceDELETE,
  responderRouteDELETE,
}
