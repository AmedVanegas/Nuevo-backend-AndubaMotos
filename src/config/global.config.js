
export const ROLES = {
  OWNER: "owner",
  ADMIN: "admin",
  EMPLOYEE: "employee",
  CLIENT: "client",
};

export const ALLOWED_ROLES = Object.values(ROLES);

export const ROLE_LABELS = {
  [ROLES.OWNER]: 'Dueño',
  [ROLES.ADMIN]: 'Administrador',
  [ROLES.EMPLOYEE]: 'Empleado',
  [ROLES.CLIENT]: 'Cliente',

}
