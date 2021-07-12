const { DataTypes, Model } = require('sequelize');
const { prefix } = require('../../../config.json');

class GuildConfig extends Model {}

module.exports = (sequelize) => {
  GuildConfig.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    prefix: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: prefix
    },
    systemChannelId: DataTypes.STRING,
    welcomeChannelId: DataTypes.STRING,
    farewellChannelId: DataTypes.STRING,
    modLogChannelId: DataTypes.STRING,
    adminRoleId: DataTypes.STRING,
    modRoleId: DataTypes.STRING,
    muteRoleId: DataTypes.STRING,
    autoRoleId: DataTypes.STRING,
    crownRoleId: DataTypes.STRING,
    randomColor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    welcomeMessage: DataTypes.STRING,
    farewellMessage: DataTypes.STRING,
  }, {
    tableName: 'guild_configs',
    underscored: true,
    sequelize
  });
};
