import { Test } from "./test"
import { User } from "./user"

User.belongsToMany(Test,    {
    through: 'user_tests'
})

Test.belongsToMany(User,    {
    through: 'user_tests'
})

export  {
    Test,
    User
}