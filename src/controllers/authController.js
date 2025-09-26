import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { signToken } from '../utils/jwt.js';

export async function register(req, res, next) {
  try {
    const { name, email, password, usertype } = req.body;

    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(409).json({ message: 'Email já cadastrado' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash, usertype });

    const token = signToken({ id: user.id, email: user.email });
    res.status(201).json({ user: { id: user.id, name: user.name, email: user.email }, token });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Credenciais inválidas' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Credenciais inválidas' });

    const token = signToken({ id: user.id, email: user.email });
    res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
  } catch (err) {
    next(err);
  }
}
