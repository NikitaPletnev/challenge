const faker = require('faker');

function FakeDataGenerator(accountType) {
    if (accountType !== undefined) {
        this.accountType = accountType;
    }
}

FakeDataGenerator.prototype.generateFakeUser = function () {

    const number = Math.floor(Math.random() * 100) + 1;

    faker.locale = "de";

    const getResult = () => {
            const firstname = faker.name.firstName();
            const lastname = faker.name.lastName();

            const delimiter = ["_", ".", "-", ""][faker.random?.number(
                ["_", ".", "-", ""].length - 1)];

            const email = `${firstname}${delimiter}${lastname}${faker.random?.number(100)}@${faker?.internet.domainName()}`
            return {
                firstname: firstname, lastname: lastname,
                email: email,
                contactName: firstname + " " + lastname
            };
    }

    return {
        email: getResult().email,
        contactName: getResult().contactName,
        password: 'password',
        accountType: this.accountType,
        firstName: getResult().firstname,
        lastName: getResult().lastname,
        phoneNumber: faker.phone.phoneNumber(),
        brandingStreet: faker.address.streetName() + ' ' + number,
    };
};

FakeDataGenerator.prototype.accountType = "default";

FakeDataGenerator.createIntervalBasedFakeUserGenerator = function (cbFn, time) {
    this.timer = setInterval(function () {
        cbFn(new FakeDataGenerator().generateFakeUser());
    }, time);
};

module.exports = FakeDataGenerator;
