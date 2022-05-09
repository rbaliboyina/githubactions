class Utilities {
    //password creation criteria
    allowed = {
        uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
        lowers: "qwertyuiopasdfghjklzxcvbnm",
        numbers: "1234567890",
        symbols: "!@%#$&"
    }

    //countries allowed by the Bussr while signing up the operator
    // countries = ['Philippines', 'Indonesia', 'Singapore', 'Malaysia', 'UAE', 'India'];
    countries = ['Philippines', 'Indonesia'];

    colors = ['VIOLET', 'BLUE', 'RED', 'GREEN', 'YELLOW', 'WHITE', 'PURPLE', 'BLACK', 'DARKRED'];

    busmodels = ['ACE Cougar', 'AEC Q-type', 'AEC Regal VI', 'AEC Regent II', 'AEC Regent III', 'AEC Regent V', 'AEC Reliance', 'AEC Routemaster', 'AEC Swift', 'Alexander ALX100', 'Alexander ALX200'];

    //required for date utilities
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    getRandomCharFromString(str) {
        return str.charAt(Math.floor(Math.random() * str.length));
    }

    generateColors() {
        var color = ''
        color = this.colors[Math.floor(Math.random() * this.colors.length)];
        return color;
    }

    generateBusModels() {
        var model = ''
        model = this.busmodels[Math.floor(Math.random() * this.busmodels.length)]
        return model;
    }

    getCountries() {
        var country = ''
        country = this.countries[Math.floor(Math.random() * this.countries.length)];
        return country;
    }

    generateEmail() {
        var email = '';
        var str = this.allowed.lowers + this.allowed.numbers;
        for (var i = 0; i < 11; i++) {
            email = email + this.getRandomCharFromString(str);
        }
        return email + this.getRandomInt(1, 1000) + '@gmail.com';
    }

    generateLicenseNo() {
        var licno = '';
        var str = this.allowed.uppers + this.allowed.numbers;
        for (var i = 0; i < 5; i++) {
            licno = licno + this.getRandomCharFromString(str);
        }
        return licno;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min).toString();
    }

    generateYear() {
        return this.getRandomInt(1990, new Date().getFullYear());
    }

    generateTravelsName() {
        let travelName = '';
        travelName = this.getRandomCharFromString(this.allowed.lowers);
        travelName = travelName + this.getRandomCharFromString(this.allowed.uppers);
        travelName = travelName + this.getRandomCharFromString(this.allowed.lowers);
        travelName = travelName + this.getRandomCharFromString(this.allowed.uppers);

        travelName = travelName + 'Travels';

        return travelName;
    }

    generateVehicleId() {
        var vehicleID = ''
        vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.uppers);
        vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.uppers);
        for (var i = 0; i <= 1; i++) {
            vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.numbers);
        }
        vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.uppers);

        vehicleID = vehicleID + this.getRandomInt(1, 1000);

        for (var i = 0; i <= 3; i++) {
            vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.numbers);
        }
        return vehicleID;
    }

    generateSeats() {
        return this.getRandomInt(10, 30);
    }

    generateOperatorId() {
        var operatorID = ''
        operatorID = operatorID + this.getRandomCharFromString(this.allowed.lowers);
        operatorID = operatorID + this.getRandomCharFromString(this.allowed.lowers);
        for (var i = 0; i <= 3; i++) {
            operatorID = operatorID + this.getRandomCharFromString(this.allowed.numbers);
        }
        return operatorID;
    }

    generateName() {
        var name = "";
        for (var i = 0; i < 10; i++) {
            name = name + this.getRandomCharFromString(this.allowed.lowers);
        }
        return name;
    }

    generatePhoneNumber() {
        var phoneNumber = "";
        for (var i = 1; i <= 9; i++) {
            phoneNumber = phoneNumber + this.getRandomCharFromString(this.allowed.numbers);
        }
        return "+919" + phoneNumber;
    }

    generatePassword() {
        let pwd = "";

        pwd = this.getRandomCharFromString(this.allowed.uppers);
        pwd = pwd + this.getRandomCharFromString(this.allowed.lowers);
        pwd = pwd + this.getRandomCharFromString(this.allowed.numbers);
        pwd = pwd + this.getRandomCharFromString(this.allowed.symbols);

        for (let i = pwd.length; i < 12; i++)
            pwd = pwd + this.getRandomCharFromString(Object.values(this.allowed).join('')); //fill the rest of the pwd with random characters
        return pwd
    }

    getNextMonthDate() {
        date = new Date();
        this.months[date.getNextMonthDate]
    }
}
module.exports = new Utilities();