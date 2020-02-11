module.exports = function(sequelize, DataTypes) {
    const Employee = sequelize.define("Employee",{
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        manager_id: {
            type: DataTypes.INTEGER,
            validate: {
                len:[1]
            }
        },
    });
        //employee.sync();
        return Employee;
};