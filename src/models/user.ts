import { sequelize } from '../database'
import { BelongsToManyAddAssociationMixin, DataTypes, Model } from 'sequelize'

export interface UserInstance extends Model    {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    bio: string,
    about: string,
    birthDate: Date,
    role: string,
    password: string,
    openToWork: boolean
//    addCertificate: BelongsToManyAddAssociationMixin
}

export const User = sequelize.define<UserInstance>(
    'users', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        name:   {
            type: DataTypes.STRING,
            allowNull: false
        },

        email:  {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        phone:  {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        bio: DataTypes.TEXT,
        
        about: DataTypes.TEXT,
        
        birthDate:  {
            type:   DataTypes.DATE,
            allowNull:  false
        },

        role:   {
            type:   DataTypes.STRING,
        },

        password:   {
            type:   DataTypes.STRING,
            allowNull:  false
        },

        openToWork: {
            type:   DataTypes.BOOLEAN,
            defaultValue:   true
        }

    }
)