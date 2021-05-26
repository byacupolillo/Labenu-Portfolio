import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabase } from "../src/data/UserDatabase"
import { USER_ROLES } from "../src/model/User"
import hashGeneratorMock from "./mocks/hashGeneratorMock"
import idGeneratorMock from "./mocks/idGeneratorMock"
import tokenGeneratorMock from "./mocks/tokenGeneratorMock"
import userDatabaseMock from "./mocks/UserDatabaseMock"

const userBusiness = new UserBusiness(
   idGeneratorMock,
   tokenGeneratorMock,
   hashGeneratorMock,
   userDatabaseMock as UserDatabase
)

describe("Signup", () => {

   test("Error when name is blank", async () => {
      expect.assertions(2)
      try {
         await userBusiness.signup(
            "",
            "mateus@gmail.com",
            "123456789",
            USER_ROLES.NORMAL
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Missing input")
      }
   })
   test("Error when email is invalid", async () => {
      expect.assertions(2)
      try {
         await userBusiness.signup(
            "nome",
            "mateusgmail.com",
            "123456789",
            USER_ROLES.NORMAL
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Invalid email")
      }
   })
   test("Error when password is invalid", async () => {
      expect.assertions(2)
      try {
         await userBusiness.signup(
            "nome",
            "mateus@gmail.com",
            "12",
            USER_ROLES.NORMAL
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("'password' must contain at least 6 characters")
      }
   })
   test("Error when role is invalid", async () => {
      expect.assertions(2)
      try {
         await userBusiness.signup(
            "nome",
            "mateus@gmail.com",
            "123456789",
            "GUEST"
         )
      } catch (error) {
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("Valid roles are 'NORMAL' and 'ADMIN'")
      }
   })
   test("Success", async () => {
      expect.assertions(1)
      try {
         const { accessToken } = await userBusiness.signup(
            "nome",
            "mateus@gmail.com",
            "123456789",
            "ADMIN"
         )

         expect(accessToken).toBe("token")
      } catch (error) {

      }
   })
})

describe("Login", () => {
   test("Error when email is not found", async () => {
      expect.assertions(2)
      try {
         await userBusiness.login(
            "mateus@gmail.com",
            "123456789"
         )
      } catch (error) {
         console.log(error);

         expect(error.statusCode).toBe(401)
         expect(error.message).toBe("Invalid credentials1")
      }
   })
   test("Error when password is not correct", async () => {
      expect.assertions(2)
      try {
         await userBusiness.login(
            "normal@email.com",
            "123456789"
         )
      } catch (error) {
         expect(error.statusCode).toBe(401)
         expect(error.message).toBe("Invalid credentials")
      }
   })
   test("Success", async () => {
      expect.assertions(1)
      try {
         const { accessToken } = await userBusiness.login(
            "normal@email.com",
            "normal password"
         )

         expect(accessToken).toBe("token")
      } catch (error) {
      }
   })
})