export const testData = {
  common: {
    password: "secret_sauce",
    invalidPassword: 'wrong_password'
  },
  users: {
    valid: {
      username: 'standard_user',
    },
    locked: {
      username: 'locked_out_user',
    },
    invalid: {
      username: 'invalid_user'
    },
    empty: {
      username: '',
      password: ''
    }
  },
  errorMessages: {

    lockedUser:
      'Epic sadface: Sorry, this user has been locked out.',

    invalidCredentials:
      'Epic sadface: Username and password do not match any user in this service',

    usernameRequired:
      'Epic sadface: Username is required'

  },
  productDetails: {
    name: 'Sauce Labs Backpack',
    price: 29.99
  },
  checkoutDetails: {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345'
  }
};