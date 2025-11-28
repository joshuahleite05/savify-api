import Profile from '../models/Profile.js';

export const createProfile = async (req, res, next) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    next(error);
  }
};

export const getAllProfiles = async (req, res, next) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (error) {
    next(error);
  }
};

export const getProfileById = async (req, res, next) => {
  try {
    const profile = await Profile.findByPk(req.params.id);
    if (!profile) return res.status(404).json({ message: 'Categoria não encontrada' });
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const [updated] = await Profile.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: 'Categoria não encontrada' });
    const updatedProfile = await Profile.findByPk(req.params.id);
    res.json(updatedProfile);
  } catch (error) {
    next(error);
  }
};

export const deleteProfile = async (req, res, next) => {
  try {
    const deleted = await Profile.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ message: 'Categoria não encontrada' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
