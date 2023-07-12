import { Test } from "./test"
import { User } from "./user"
import { Company } from "./company"
import { Job } from "./job"

User.belongsToMany(Test,    {
    through: 'user_tests'
})

Test.belongsToMany(User,    {
    through: 'user_tests'
})

User.belongsToMany(Job, {
    through: 'job_users'
})

Company.hasMany(User)
User.belongsTo(Company)

Company.hasMany(Job)

Job.belongsTo(Company)
Job.belongsToMany(User, {
    through: 'job_users'
})

export  {
    Company,
    Job,
    Test,
    User
}