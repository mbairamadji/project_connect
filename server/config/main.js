module.exports = {

	 // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
  // Database connection information
  'database': 'mongodb://kickass:kickass@ds123400.mlab.com:23400/kickass',

	'port' : process.env.PORT || 3000
}