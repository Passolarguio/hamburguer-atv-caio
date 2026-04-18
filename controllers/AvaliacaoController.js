const { Avaliacao } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { nota, pedidoId } = req.body;

      const avaliacao = await Avaliacao.create({
        nota,
        pedidoId
      });

      return res.json(avaliacao);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar avaliação.' });
    }
  },

  async index(req, res) {
    try {
      const avaliacoes = await Avaliacao.findAll();
      return res.json(avaliacoes);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar avaliações.' });
    }
  }
};