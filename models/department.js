module.exports = function(sequelize, DataTypes) {
    const Department = sequelize.define("department",{
        department_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        }
    });
        //department.sync();
        return Department;
};