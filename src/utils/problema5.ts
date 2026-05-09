type GenericObject = {
  [key: string]: any;
};

function pegaValor(obj: GenericObject, strcam: string): any {
  return strcam
    .split(".")
    .reduce((acc, key) => acc && acc[key], obj);
}

function groupBy<T extends GenericObject>(
  array: T[],
  key: string
): Record<string, T[]> {
  return array.reduce((acc, obj) => {
    const chaveGrupo = pegaValor(obj, key);

    if (!acc[chaveGrupo]) {
      acc[chaveGrupo] = [];
    }

    acc[chaveGrupo].push(obj);

    return acc;
  }, {} as Record<string, T[]>);
}

// Exemplo
const users = [
  {
    name: "Ana",
    address: {
      city: "São Paulo",
      country: {
        code: "BR",
      },
    },
  },
  {
    name: "Bruno",
    address: {
      city: "Rio",
      country: {
        code: "BR",
      },
    },
  },
  {
    name: "Carla",
    address: {
      city: "São Paulo",
      country: {
        code: "BR",
      },
    },
  },
];

// Agrupa por cidade
console.log(groupBy(users, "address.city"));

// Agrupa por código do país
console.log(groupBy(users, "address.country.code"));