module.exports = {
	db: {
	  client: 'mysql',
	  connection: process.env.DATABASE_URL || 'mysql://admin_sigmauser:pfaDKIJyPF@178.128.146.252:3306/admin_sigmatest',
	},
	port: process.env.PORT || 3000
};

