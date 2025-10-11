import { body } from 'express-validator';

export const registerValidator = [
  body('name').notEmpty().withMessage('nickname é obrigatório'),
  body('email').isEmail().withMessage('email inválido'),
  body('password').isLength({ min: 6 }).withMessage('senha precisa ter ao menos 6 caracteres'),
  // body('usertype').isInt().withMessage('usertype deve ser um número')
];

export const loginValidator = [
  body('email').isEmail().withMessage('email inválido'),
  body('password').notEmpty().withMessage('senha é obrigatória')
];
