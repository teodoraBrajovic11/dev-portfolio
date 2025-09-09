export interface User {
  name: string;
  id: number;
  location?: string;
}

const user: User = {
  id: 0,
  name: "Test name",
};

user.location;

interface Coords {
  x: number;
  y: number;
}

// type Coords = { x: number; y: number };

function greet(a: any) {
  a.name = "Jane";
}

greet({
  id: 0,
  name: "John",
});

const matt: User = {
  id: 0,
  name: "Matt",
};

const names = ["John", "Jane", "Matt"];
names
  .map((name) => {
    return {
      id: 0,
      name,
    };
  })
  .map((user) => {
    user.id;
  });

function getCoords(coords: Coords) {
  return `x: ${coords.x}, y:${coords.y}`;
}

function handleId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id.toString();
  }
}

const name = "matt" as unknown as number;

function canPerformAction(
  action: "create" | "update",
  entity: "user" | "post" | null
) {}

canPerformAction("create", "user");
