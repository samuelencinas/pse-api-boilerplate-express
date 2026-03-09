// Implementación como función lambda y con condicionales ternarias
export const factorial = (num: number): number => num === 0 ? 1 : num * factorial(num - 1);