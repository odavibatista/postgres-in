import { sequelize } from '../database'
import { BelongsToManyAddAssociationMixin, BelongsToManyCountAssociationsMixin, DataTypes, Model } from 'sequelize'
import { UserInstance } from './user'

export interface TestInstance extends Model    {
    id: number,
    name: string,
    addUser: BelongsToManyAddAssociationMixin<UserInstance, number>
    applies: BelongsToManyCountAssociationsMixin
//    addCertificate: BelongsToManyAddAssociationMixin
}

export const Test = sequelize.define<TestInstance>(
    'tests', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        name:   {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        applies:    {
            type:   DataTypes.INTEGER,
            defaultValue: 0
        }
    }
)