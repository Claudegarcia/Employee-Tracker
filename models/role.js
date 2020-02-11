module.exports = function(sequelize, DataTypes) {
    const Role = sequelize.define("Role",{
        role_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        salary: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
    });
        //role.sync();
        return Role;
};