const middleware = {}

middleware['kyc'] = require('..\\middleware\\kyc.js')
middleware['kyc'] = middleware['kyc'].default || middleware['kyc']

middleware['standalone'] = require('..\\middleware\\standalone.js')
middleware['standalone'] = middleware['standalone'].default || middleware['standalone']

export default middleware
