type User = {
  name: string;
  age: number;
  active: boolean;
};

const users: User[] = [
  { name: "Ana", age: 17, active: true },
  { name: "Bruno", age: 25, active: false },
  { name: "Carla", age: 22, active: true },
  { name: "Diego", age: 19, active: true },
  { name: "Eva", age: 15, active: true },
];

export function filtrarUsuariosValidos(lista: User[]): User[] {
  return lista
    .filter((user: User) => user.age >= 18 && user.active)
    .sort((a: User, b: User) => a.name.localeCompare(b.name));
}

console.log(filtrarUsuariosValidos(users));