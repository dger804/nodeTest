const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.create({ title, description, userId: req.user.id });
    res.json(task);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.id } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

exports.updateTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!task) return res.status(404).json({ msg: "Tarea no encontrada" });

    await task.update({ title, description });
    res.json(task);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!task) return res.status(404).json({ msg: "Tarea no encontrada" });

    await task.destroy();
    res.json({ msg: "Tarea eliminada" });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
};
