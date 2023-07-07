const FuncionarioModel = require('../models/officer.model')

exports.get = async () => {
    return await FuncionarioModel.find({})
}