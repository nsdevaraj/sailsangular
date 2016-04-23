
sudo npm -g install sails
sudo npm -g install bower

sails new apiserve
cd apiserve
sails generate api vitals
sails generate api patient
sails generate api doctor
sails lift

//todo
angular seed 

npm install
npmn start
	
http://localhost:1337/vitals/create?minsp02=99&maxsp02=233&minbeat=83&maxbeat=122&mintemp=78&maxtemp=102&interval=23
http://localhost:1337/doctor/create?name=DrSathya&mobile=9583298535
http://localhost:1337/patient/create?name=Peter&address=Adyar&mobile=9583298535&vitals=3&supervisor=4 

//
npm install -g generator-angular-crud
npm install -g yo
yo angular-crud
yo angular-crud:feature patient
yo angular-crud:feature vitals
yo angular-crud:feature doctor